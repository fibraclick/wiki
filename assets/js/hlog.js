window.app = {
    stepMapping: {
        '17a': 8,
        '35b': 16
    }
};

document.addEventListener('DOMContentLoaded', () => {
    run();
});

function run() {
    document.getElementById('file').onchange = function () {
        let file = this.files[0];
        let reader = new FileReader();

        reader.onload = function() {
            let lines = this.result.split('\n');
            lines.forEach((line) => {
                if (line.startsWith('VDSL2 Profile')) {
                    window.app.profile = line.split(': ')[1].trim();
                }
                else if (line.startsWith('HLOG DS Array')) {
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

    function plot() {
        if (!window.app.profile) {
            alert('Profilo non trovato.');
            return;
        }

        document.getElementById('profile').innerText = 'Profilo: ' + window.app.profile;

        let step = window.app.stepMapping[window.app.profile];

        if (!step) {
            alert('Profilo non riconosciuto.');
            return;
        }

        if (!window.app.hlogDS || !window.app.hlogUS || !window.app.qln) {
            alert('Dati non trovati.');
            return;
        }

        function filterOutliers(val) {
            if (val == -963 || val == -1505) {
                return null;
            }
            return +val;
        }

        window.app.hlogDS = window.app.hlogDS.split(',').map(filterOutliers);
        window.app.hlogUS = window.app.hlogUS.split(',').map(filterOutliers);
        window.app.qln = window.app.qln.split(',').map(filterOutliers);

        let labels = [];
        for (let i = step; i <= step * 512; i += step) {
            labels.push(i);
        }

        let options = {
            responsive: true,
            legend: {
                position: 'bottom'
            },
            tooltips: { enabled: false },
            scales: {
                xAxes: [{
                    ticks: {
                        max: step * 512,
                        min: 0,
                        stepSize: step
                    }
                }]
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
                        data: window.app.hlogDS,
                        borderWidth: 2,
                        borderColor: '#006ecc',
                        pointRadius: 0,
                        fill: false
                    },
                    {
                        label: 'US',
                        data: window.app.hlogUS,
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

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'QLN',
                        data: window.app.qln,
                        borderWidth: 2,
                        borderColor: '#006ecc',
                        pointRadius: 0,
                        fill: false
                    }
                ]
            },
            options
        });
    }
}
