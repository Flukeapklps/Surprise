document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
    this.classList.add("hidden");
});

document.getElementById("showVideoBtn").addEventListener("click", function() {
    document.getElementById("videoContainer").classList.remove("hidden");
    this.classList.add("hidden");
});

document.getElementById("backButton").addEventListener("click", function() {
    // Hide the video container and show the surprise message again
    document.getElementById("videoContainer").classList.add("hidden");
    document.getElementById("surpriseMessage").classList.remove("hidden");
    document.getElementById("showVideoBtn").classList.remove("hidden");
    this.classList.add("hidden");
});
