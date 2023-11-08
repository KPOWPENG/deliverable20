var video;
const video = document.querySelector("#video");

window.addEventListener("load", function() {
    /* video = document.querySelector("#video"); */
    video.autoplay = false;
    video.loop = false;
    console.log("Video initialized");
});
document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Video played");
    document.querySelect("#volume").innerText = video.volume * 100 + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Video paused");
});
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    video.playbackRate *= 0.9; 
    console.log("Video speed reduced to " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    video.playbackRate /= 0.9; 
    console.log("Video speed increased to " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    video.currentTime += 10; 
    if (video.currentTime > video.duration) {
        video.currentTime = 0;
    }
    console.log("Current time is: " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        document.querySelector("#mute").innerText = "Mute";
    } else {
        video.muted = true;
        document.querySelector("#mute").innerText = "Unmute";
    }
});

document.querySelector("#volumeSlider").addEventListener("input", function() {
    video.volume = this.value / 100; 
    document.querySelector("#volume").innerText = video.volume * 100 + "%";
    console.log("Volume set to " + this.value);
});

document.querySelector("#vintage").addEventListener("click", function() {
    document.querySelector(#player1).classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    document.querySelector(#player1).classList.remove("oldSchool"); 
});
