
// const projects = document.querySelectorAll('.project');
// const projectsTitle = document.getElementById('projects-title');
// let currentIndex = 0;

// function showNextProject() {
//     projects[currentIndex].classList.remove('active'); // Hide current project
//     currentIndex = (currentIndex + 1) % projects.length; // Move to next index
//     projects[currentIndex].classList.add('active'); // Show next project

//     // Show or hide the projects title based on active project
//     if (projects[currentIndex].classList.contains('active')) {
//         projectsTitle.style.display = 'none'; // Hide title when showing project
//     }
// }

// // Show the first project initially
// projects[currentIndex].classList.add('active');

// // Change project every 5 seconds
// setInterval(showNextProject, 5000);
const cards = document.querySelectorAll('.project-card');
let currentIndex = 0;

// Function to show the current project card
function showCurrentProject() {
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
    });
}

// Event listener for the "Next Project" button
document.getElementById('next-project').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; // Loop back to the first card
    showCurrentProject();
});

// Initialize the first project to show
showCurrentProject();



