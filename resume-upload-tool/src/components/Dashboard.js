document.addEventListener('DOMContentLoaded', function() {
    // Data for the analytics dashboard
    const analyticsData = {
        labels: ['Total Resumes', 'Shortlisted', 'Rejected', 'Pending'],
        datasets: [{
            label: 'Resume Analytics',
            data: [120, 45, 60, 15],
            backgroundColor: ['#4e73df', '#1cc88a', '#e74a3b', '#f6c23e'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#d9534f', '#f6b93e'],
            borderColor: '#4e73df',
        }]
    };

    // Config for the analytics chart
    const analyticsConfig = {
        type: 'doughnut',
        data: analyticsData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Overall Resume Statistics'
                }
            }
        },
    };

    // Render the analytics chart
    const analyticsCtx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(analyticsCtx, analyticsConfig);

    // Data for the resume screening process dashboard
    const screeningProcessData = {
        labels: ['Step 1: Upload', 'Step 2: Parsing', 'Step 3: Screening', 'Step 4: Shortlisting'],
        datasets: [{
            label: 'Resumes Processed',
            data: [120, 115, 95, 45],
            backgroundColor: '#4e73df',
            borderColor: '#4e73df',
            borderWidth: 1
        }]
    };

    // Config for the screening process chart
    const screeningProcessConfig = {
        type: 'bar',
        data: screeningProcessData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Resume Screening Process'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    // Render the screening process chart
    const screeningProcessCtx = document.getElementById('screeningProcessChart').getContext('2d');
    new Chart(screeningProcessCtx, screeningProcessConfig);
});
