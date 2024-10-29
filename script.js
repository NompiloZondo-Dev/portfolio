
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



const chatBody = document.getElementById("chatbot-messages");
const userInput = document.getElementById("chat-input");
const chatButton = document.getElementById("chat-button");
const closeChatButton = document.getElementById("close-chat");

// Sample responses
const responses = {
    "hi": "Hello, I am your VA. How can I help you explore my portfolio ?",
    "hello": "Hi! , Hello, I am your VA. How can I help you explore my portfolio ?",
    "what do you do?": "I am a software developer. I create websites and applications.",
    "help": "Sure! What do you need help with?",
    "bye": "Goodbye! Have a great day!",
    "what is your name": "Nompilo",
    "what are your skills": "I'm skilled in JS,HTML,CSS ,PHP,C#,REACT and JAVA",
    "projects": "You can view my projects on my projects page",
    "okay": "Thank you for contacting me.",
    "contact": "Feel free to contact me on +27684427803 / nompilozondo44@gmail.com",
};

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Append user message
        const userMessageElement = document.createElement("p");
        userMessageElement.className = "user-message";
        userMessageElement.textContent = "You: " + userMessage;
        chatBody.appendChild(userMessageElement);
        
        // Get bot response
        const botResponse = responses[userMessage.toLowerCase()] || "I'm a bot , please right in a way i can understand.";
        const botMessageElement = document.createElement("p");
        botMessageElement.className = "bot-message";
        botMessageElement.textContent = "Bot: " + botResponse;
        chatBody.appendChild(botMessageElement);

        // Clear input
        userInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }
}

chatButton.addEventListener("click", function() {
    document.getElementById('chatbot').style.display = 'flex';
});

closeChatButton.addEventListener("click", function() {
    document.getElementById('chatbot').style.display = 'none';
});

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

document.getElementById('chat-button').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'flex';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'none';
});

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = e.target.value;
        if (input.trim() !== '') {
            const message = document.createElement('p');
            message.textContent = 'You: ' + input;
            document.getElementById('chatbot-messages').appendChild(message);
            e.target.value = ''; // Clear input

            // Simulate a bot response
            setTimeout(() => {
                const botResponse = document.createElement('p');
                botResponse.textContent = 'Bot: Hello, I am your VA. How can I help you explore my portfolio ?';
                document.getElementById('chatbot-messages').appendChild(botResponse);
            }, 1000);
            
        }
    }
    if (e.key === 'Enter') {
        const input = e.target.value;
        if (input.trim() !== '') {
            const message = document.createElement('p');
            message.textContent = 'You: ' + "What is your name";
            document.getElementById('chatbot-messages').appendChild(message);
            e.target.value = ''; // Clear input

            // Simulate a bot response
            setTimeout(() => {
                const botResponse = document.createElement('p');
                botResponse.textContent = 'Bot: Nompilo !';
                document.getElementById('chatbot-messages').appendChild(botResponse);
            }, 1000);
            
        }
    }
});