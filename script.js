// Get references to elements
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const showVideoBtn = document.getElementById('showVideoBtn');
const videoContainer = document.getElementById('videoContainer');

// Show surprise message when the button is clicked
surpriseButton.addEventListener('click', () => {
    surpriseMessage.classList.remove('hidden');
    surpriseButton.classList.add('hidden');
});

// Show video when the "Show Surprise Video" button is clicked
showVideoBtn.addEventListener('click', () => {
    videoContainer.classList.remove('hidden');
    showVideoBtn.classList.add('hidden');
});
