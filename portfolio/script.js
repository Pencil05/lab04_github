// Define chart data
const skillsLabels = ["HTML", "CSS", "JavaScript", "Python", "SQL"];
const skillsData = [80, 80, 40, 70, 10];

// Create and configure chart
const skillsChart = new Chart(document.getElementById("skillsChart"), {
    type: "bar",
    data: {
        labels: skillsLabels,
        datasets: [{
            label: "Skill Level",
            data: skillsData,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
