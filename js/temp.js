/* chart.js chart examples */

// chart colors
var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];



/* bar chart */
var chBar = document.getElementById("chBar");
if (chBar) {
    new Chart(chBar, {
        type: 'bar',
        data: {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                data: [10, 8, 30, 40, 20, 50, 70],
                backgroundColor: colors[0]
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.4,
                    categoryPercentage: 0.5
                }]
            }
        }
    });
}