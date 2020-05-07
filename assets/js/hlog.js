window.app = {
    stepMapping: {
        '17a': 8,
        '35b': 16,
        '8b': 1971 / 512,
        '12a': 2782 / 512
    },
    hideFrequencies: true,
    plot,
    exportChart,
    toggleHideFrequencies
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hideFrequencies').checked = window.app.hideFrequencies;
    run();
});

function exportChart(what) {
    let canvas = document.getElementById('chart' + what.toUpperCase());
    let w = window.open('', '_blank');
    w.document.write('<meta name="viewport" content="width=device-width, initial-scale=1">'); 
    w.document.write('<img style="max-width: 100%" src="' + canvas.toDataURL() + '">'); 
}

function toggleHideFrequencies() {
    window.app.hideFrequencies = !window.app.hideFrequencies;
    plot();
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

            let lines = this.result.split('\n');
            lines.forEach((line) => {
                if (line.startsWith('VDSL2 Profile:')) {
                    window.app.profile = line.split(': ')[1].trim();
                }
                else if (line.startsWith('HLOG DS Array') || line.startsWith('HLOG Array')) {
                    window.app.hlogDS = line.split(': ')[1].trim();
                }
                else if (line.startsWith('HLOG US Array')) {
                    window.app.hlogUS = line.split(': ')[1].trim();
                }
                else if (line.startsWith('QLN Array')) {
                    window.app.qln = line.split(': ')[1].trim();
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

function plot() {
    if (!window.app.profile) {
        alert('Profilo non trovato.');
        return;
    }

    document.getElementById('profile').innerText = window.app.profile;

    let step = window.app.stepMapping[window.app.profile];

    if (!step) {
        alert('Profilo non riconosciuto.');
        return;
    }

    if (!window.app.hlogDS || !window.app.qln) {
        alert('Dati non trovati.');
        return;
    }

    function filterOutliers(val) {
        if (val == -963 || val == -1505) {
            return null;
        }
        return +val;
    }

    let hlogDS = window.app.hlogDS.split(',').map(filterOutliers);
    let hlogUS = window.app.hlogUS
        ? window.app.hlogUS.split(',').map(filterOutliers)
        : [];
    let qln = window.app.qln.split(',').map(filterOutliers);

    let maxSamples;

    if (window.app.hideFrequencies) {
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
        tooltips: { enabled: false },
        scales: {
            xAxes: [{
                ticks: {
                    max: maxX,
                    min: 0,
                    stepSize: step
                }
            }],
            yAxes: [{
                afterFit: function (scaleInstance) {
                    scaleInstance.width = 50;
                }
            }]
        },
        title: {
            display: true,
            text: 'HLOG',
            fontSize: 14
        }
    };

    let ctx = document.getElementById('chartHLOG');

    new Chart(ctx, {
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

    new Chart(ctx, {
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
