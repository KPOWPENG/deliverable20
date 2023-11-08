const video = document.querySelector("#player1");

window.addEventListener("load", function() {
    video.autoplay = false;
    video.loop = false;
    video.pause();
    console.log("Video initialized");
    video.volume = document.querySelector("#slider").value / 100;
});
document.querySelector("#play").addEventListener("click", function() {
    console.log("Video played");
    video.play();
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Video paused");
    video.pause();
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
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
        console.log("Going back to the start");
    }
    else{
        video.currentTime += 10;
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

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100; 
    document.querySelector("#volume").textContent = this.value + "%";
    console.log("Volume set to " + this.value);
});

document.querySelector("#vintage").addEventListener("click", function() {
    document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    document.querySelector("#player1").classList.remove("oldSchool"); 
});
