// adding datasets
var ctx = document.getElementById('mixedChart').getContext('2d');
var mixedChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['January', 'February', 'March', 'April', 
        'May', 'June','July','August','September',
    'October', 'November', 'December'],
        datasets: [{
            label: '# of Employed Texans',
            data: [13178687, 13204791, 13231818, 13255447, 13274143,
                13291680,13315696,13344054,13375183,13400940,13406412,13404409],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(134, 140, 200, 0.5)',
                'rgba(65, 113, 192, 0.5)',
                'rgba(34, 118, 42, 0.5)',
                'rgba(182, 230, 76, 0.5)',
                'rgba(42, 19, 238, 0.5)',
                'rgba(203, 88, 33, 0.5)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(134, 140, 200, 0.5)',
                'rgba(65, 113, 192, 0.5)',
                'rgba(34, 118, 42, 0.5)',
                'rgba(182, 230, 76, 0.5)',
                'rgba(42, 19, 238, 0.5)',
                'rgba(203, 88, 33, 0.5)',
            
            ],

            borderWidth: 1
        }]
    },

    options: {
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:false
                }
            }]
        }
    }

    
});
