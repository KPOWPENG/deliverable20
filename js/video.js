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
    video.playbackRate -= 0.1; 
    console.log("Video speed reduced to " + video.playbackRate);
});
document.querySelector("#speedUp").addEventListener("click", function() {
    video.playbackRate += 0.1; 
    console.log("Video speed increased to " + video.playbackRate);
});
document.querySelector("#skipAhead").addEventListener("click", function() {
    video.currentTime += 10; // Skip ahead by 10 seconds
    if (video.currentTime >= video.duration) {
        video.currentTime = 0; 
    }
    console.log("Video location: " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted; 
    document.querySelector("#mute").innerText = video.muted ? "Unmute" : "Mute";
});
document.querySelector("#volumeSlider").addEventListener("input", function() {
    video.volume = this.value; 
    console.log("Volume set to " + this.value);
});
document.querySelector("#styled").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#original").addEventListener("click", function() {
    video.classList.remove("oldSchool"); 
});
