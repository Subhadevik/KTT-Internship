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

const ctx2 = document.getElementById('salesByCategoryChart');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Electronics', 'Clothing', 'Home & Garden', 'Books', 'Other'],
        datasets: [
            {
                data: [300, 200, 150, 100, 50],
                backgroundColor: [
                    '#f51445',
                    '#1798ee',
                    '#f6b30c',
                    '#4BC0C0',
                    '#601fe0'
                ]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const ctx3 = document.getElementById('salesOverTimeChart');

new Chart(ctx3, {
    type: 'bar',    
    data: {
        labels: ['Water Bottle', 'Bags', 'Slim Tapered Fit Jeans', 'Coffee Maker', 'IPhone 16 Pro'],
        datasets: [ 
            {   
                label: 'Units Sold',
                data: [120, 90, 80, 70, 60],
                backgroundColor: '#5a36eb'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

