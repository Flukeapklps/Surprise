// Show the surprise message when the "Surprise Me" button is clicked
document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
    this.classList.add("hidden");
});

// Show the surprise video when the "Show Surprise Video" button is clicked
document.getElementById("showVideoBtn").addEventListener("click", function() {
    document.getElementById("videoContainer").classList.remove("hidden");
    this.classList.add("hidden"); // Hide the "Show Surprise Video" button
    document.getElementById("backButton").classList.remove("hidden"); // Show the Back button
});

// Go back to the surprise message when the "Back" button is clicked
document.getElementById("backButton").addEventListener("click", function() {
    document.getElementById("videoContainer").classList.add("hidden"); // Hide the video
    document.getElementById("surpriseMessage").classList.remove("hidden"); // Show the surprise message
    document.getElementById("showVideoBtn").classList.remove("hidden"); // Show the "Show Surprise Video" button
    this.classList.add("hidden"); // Hide the Back button
});
