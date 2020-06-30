window.app = {
    stepMapping: {
        '17a': 8,
        '35b': 16,
        '8b': 1971 / 512,
        '12a': 2782 / 512
    },
    hideUnusedTones: true,
    useFrequencies: false,
    plot,
    exportChart,
    toggleHideUnusedTones,
    toggleUseFrequencies,
    toneToFrequency
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hideUnusedTones').checked = window.app.hideUnusedTones;
    document.getElementById('useFrequencies').checked = window.app.useFrequencies;
    run();
});

function exportChart(what) {
    let canvas = document.getElementById('chart' + what.toUpperCase());
    let w = window.open('', '_blank');
    w.document.write('<meta name="viewport" content="width=device-width, initial-scale=1">'); 
    w.document.write('<img style="max-width: 100%" src="' + canvas.toDataURL() + '">'); 
}

function toggleHideUnusedTones() {
    window.app.hideUnusedTones = !window.app.hideUnusedTones;
    plot();
}

function toggleUseFrequencies() {
    window.app.useFrequencies = !window.app.useFrequencies;
    plot();
}

function toneToFrequency(value) {
    return value * 4.3125;
}

function todB(value) {
    return (value ? value / 10 : null);
}

function run() {
    document.getElementById('file').onchange = function () {
        let file = this.files[0];
        let reader = new FileReader();

        reader.onload = function() {
            window.app.profile = null;
            window.app.hlogDS = null;
            window.app.hlogUS = null;
            window.app.qln = null;
            window.app.vectoring = false;

            let lines = this.result.split('\n');
            lines.forEach((line) => {
                if (!window.app.profile && line.startsWith('VDSL2 Profile:')) {
                    window.app.profile = line.split(': ')[1].trim();
                }
                else if (!window.app.hlogDS && line.startsWith('HLOG DS Array')
                    || line.startsWith('HLOG Array')) {
                    window.app.hlogDS = line.split(': ')[1].trim();
                }
                else if (!window.app.hlogUS && line.startsWith('HLOG US Array')) {
                    window.app.hlogUS = line.split(': ')[1].trim();
                }
                else if (!window.app.qln && line.startsWith('QLN Array')) {
                    window.app.qln = line.split(': ')[1].trim();
                }
                else if (!window.app.vectoring
                    && line.startsWith('VDSL2 GVECT error sample packets request')) {
                    window.app.vectoring = parseInt(line.split(': ')[1].trim()) > 0;
                }
                else if (!window.app.vectoring
                    && line.startsWith('VDSL2 GVECT error sample packets send')) {
                    window.app.vectoring = parseInt(line.split(': ')[1].trim()) > 0;
                }
            });

            plot();
        };

        reader.readAsText(file);
    };
}

function findLastNonNullIndex(arr) {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (arr[i] != null) {
            return i;
        }
    }

    return arr.length;
}

function filterOutliers(val) {
    if (val == -963 || val == -1505) {
        return null;
    }
    return +val;
}

function estimateLineLength(cablekl0, attenuations, step) {
    const tone = 232;
    const index = tone / step;
    
    let kl0;
    if (Number.isInteger(index)) {
        kl0 = attenuations[index];
    }
    else {
        kl0 = (attenuations[Math.floor(index)] + attenuations[Math.ceil(index)]) / 2;
    }

    let length = (-kl0 / cablekl0) * 1000;
    return Math.round(length);
}

function plot() {
    if (!window.app.profile) {
        alert('Profilo non trovato.');
        return;
    }

    document.getElementById('profile').innerText = window.app.profile;
    document.getElementById('vectoring').innerText = (window.app.vectoring ? 'Sì 🎉' : 'No');

    let step = window.app.stepMapping[window.app.profile];

    if (!step) {
        alert('Profilo non riconosciuto.');
        return;
    }

    if (!window.app.hlogDS || !window.app.qln) {
        alert('Dati non trovati.');
        return;
    }

    let hlogDS = window.app.hlogDS.split(',').map(filterOutliers).map(todB);
    let hlogUS = window.app.hlogUS
        ? window.app.hlogUS.split(',').map(filterOutliers).map(todB)
        : [];
    let qln = window.app.qln.split(',').map(filterOutliers).map(todB);

    document.getElementById('length1').innerText = estimateLineLength(27, hlogDS, step);
    document.getElementById('length2').innerText = estimateLineLength(19, hlogDS, step);

    let maxSamples;

    if (window.app.hideUnusedTones) {
        let lastIndexToRender = Math.max(
            findLastNonNullIndex(hlogDS),
            findLastNonNullIndex(hlogUS)
        );

        maxSamples = Math.min(
            lastIndexToRender + step, // add some padding to the right
            512 // avoid going above 512
        );

        hlogDS = hlogDS.slice(0, maxSamples);
        hlogUS = hlogUS.slice(0, maxSamples);
        qln = qln.slice(0, maxSamples);
    }
    else {
        maxSamples = 512;
    }

    let maxX = step * maxSamples;

    let labels = [];
    for (let i = step; i <= maxX; i += step) {
        labels.push(Math.round(i));
    }

    let options = {
        legend: {
            position: 'bottom'
        },
        tooltips: { 
            enabled: true,
            intersect: false,
            mode: 'index',
            callbacks: {
                title: function (tooltipItem, data) {
                    return 'Tono ' + tooltipItem[0].label
                        + '\nFreq: ' + toneToFrequency(tooltipItem[0].label) + ' kHz';
                }
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    max: maxX,
                    min: 0,
                    stepSize: step,
                    callback: function(value, index, values) {
                        if (window.app.useFrequencies) {
                            return Math.round(value * 4.3125);
                        }
                        else {
                            return value;
                        }
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: (window.app.useFrequencies ? 'Frequenza [kHz]' : 'Tono')
                }
            }],
            yAxes: [{
                afterFit: function (scaleInstance) {
                    scaleInstance.width = 50;
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Attenuazione [dB]'
                }
            }]
        },
        title: {
            display: true,
            text: 'HLOG',
            fontSize: 14
        },
        animation: {
            duration: 0
        },
        maintainAspectRatio: false
    };

    let ctx = document.getElementById('chartHLOG');

    if (window.app.chart1) {
        window.app.chart1.destroy();
    }

    window.app.chart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'DS',
                    data: hlogDS,
                    borderWidth: 2,
                    borderColor: '#006ecc',
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'US',
                    data: hlogUS,
                    borderWidth: 2,
                    borderColor: '#0fc420',
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options
    });

    ctx = document.getElementById('chartQLN');
    options.legend.display = false;
    options.title.text = 'QLN';
    options.scales.yAxes[0].scaleLabel.labelString = 'Rumore [dBm]';

    if (window.app.chart2) {
        window.app.chart2.destroy();
    }

    window.app.chart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'QLN',
                    data: qln,
                    borderWidth: 2,
                    borderColor: '#006ecc',
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options
    });

    document.getElementById('charts').style.display = 'block';
    document.getElementById('noUsData').style.display = (hlogUS.length ? 'none' : 'block');
}
