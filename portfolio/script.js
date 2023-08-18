const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Skills chart data
const skillsData = {
    labels: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    datasets: [{
        label: "Skills",
        data: [80, 65, 30, 70, 5], // Skill levels (out of 100)
        backgroundColor: "rgba(52, 152, 219, 0.5)", // Chart color
        borderColor: "rgba(52, 152, 219, 1)",
        borderWidth: 1
    }]
};

// Create skills chart
const skillsChartCanvas = document.getElementById("skillsChart");
const skillsChart = new Chart(skillsChartCanvas, {
    type: "bar",
    data: skillsData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
