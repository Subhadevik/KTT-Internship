const ctx = document.getElementById('salesChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Orders',
                data: [5000, 7000, 6000, 8000, 6500, 7200, 9000],
                borderWidth: 2
            },
            {
                label: 'Income Growth',
                data: [6000, 6500, 7000, 7500, 7200, 6800, 8000],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
