var video;

window.addEventListener("load", function() {
    video = document.querySelector("#video");
    video.autoplay = false;
    video.loop = false;
    console.log("Video initialized");
});
document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Video played");
    document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Video paused");
});
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    video.playbackRate -= 0.1; 
    console.log("Video speed reduced to " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    video.playbackRate += 0.1; 
    console.log("Video speed increased to " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    video.currentTime += 10; 
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current time is: " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
});
document.querySelector("#volumeSlider").addEventListener("input", function() {
    video.volume = this.value / 100; 
    document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
    console.log("Volume set to " + this.value);
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool"); 
});
