document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("surpriseMessage").classList.remove("hidden");
    this.classList.add("hidden");
});

document.getElementById("showVideoBtn").addEventListener("click", function() {
    document.getElementById("videoContainer").classList.remove("hidden");
    this.classList.add("hidden");
});
