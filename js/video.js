var video;

window.addEventListener("load", function() {
    video = document.querySelector("#video");
    video.autoplay = false;
    video.loop = false;
    console.log("Video initialized");
});
document.querySelector("#play").addEventListener("click", function() {
    if (video.paused) {
        video.play();
        console.log("Video is playing");
    } else {
        video.pause();
        console.log("Video is paused");
    }
});
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Video is paused");
});
document.querySelector("#slowDown").addEventListener("click", function() {
    video.playbackRate -= 0.1; // Slow down by 10%
    console.log("Video speed reduced to " + video.playbackRate);
});
document.querySelector("#speedUp").addEventListener("click", function() {
    video.playbackRate += 0.1; // Speed up by 10%
    console.log("Video speed increased to " + video.playbackRate);
});
document.querySelector("#skipAhead").addEventListener("click", function() {
    video.currentTime += 10; // Skip ahead by 10 seconds
    if (video.currentTime >= video.duration) {
        video.currentTime = 0; // Go back to the start if the end is reached
    }
    console.log("Video location: " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted; // Toggle mute/unmute
    document.querySelector("#mute").innerText = video.muted ? "Unmute" : "Mute";
});
document.querySelector("#volumeSlider").addEventListener("input", function() {
    video.volume = this.value; // Set volume based on the slider value
    console.log("Volume set to " + this.value);
});
document.querySelector("#styled").addEventListener("click", function() {
    video.classList.add("oldSchool"); // Add the class for styling
});

document.querySelector("#original").addEventListener("click", function() {
    video.classList.remove("oldSchool"); // Remove the class for styling
});
