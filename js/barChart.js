const ctx = document.getElementById('myChart');

fetch('./js/data.json')
    .then(function (response) {
        if (response.ok == true) {
            return response.json();
        }
    })
    .then(function (data) {
        createChart(data, 'bar');
    });

function createChart(data, type) {
    new Chart(ctx, {
        type: type,
        data: {
            labels: data.map(row => row.technology),
            datasets: [{
                label: '# of Votes',
                data: data.map(row => row.confidence),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                maintainAspectRatio: false
            }
        }
    });
}