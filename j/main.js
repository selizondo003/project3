import {
    cueTimer
} from "./modules/cuepoints.js";
const vid = document.querySelector('.whale');

//video control buttons
const myplay = document.getElementById('myplay');
const mypause = document.getElementById('mypause');
const mymute = document.getElementById('mymute');
const myunmute = document.getElementById('myunmute');


//section list
const saveMovement = document.getElementById('saveMovement');
const ecoEngineer = document.getElementById('ecoEngineer');
const whalePoop = document.getElementById('whalePoop');
const whaleCarcas = document.getElementById('whaleCarcas');


vid.src = "assets/vosWhale.mp4";
vid.load();

//add event listeners for control

myplay.addEventListener('click', (e) => {
    playVideo(vid);
});

mypause.addEventListener('click', (e) => {
    pauseVideo(vid);
});

mymute.addEventListener('click', (e) => {
    muteVid(vid);
});

myunmute.addEventListener('click', (e) => {
    unmuteVid(vid);
});


//creating certain sections in video 
saveMovement.addEventListener('click', (e) => {
    vid.currentTime = 42;
});
ecoEngineer.addEventListener('click', (e) => {
    vid.currentTime = 93;
});
whalePoop.addEventListener('click', (e) => {
    vid.currentTime = 124.12;
});
whaleCarcas.addEventListener('click', (e) => {
    vid.currentTime = 189.50;
});


setTimeout(function () {
    console.log("Ready")
}, 5);

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [

        {
            seconds: 11,
            callback: bG
        },
        {
            seconds: 2,
            callback: image
        },
        {
            seconds: 97,
            callback: engineer
        },
        {
            seconds: 124.12,
            callback: feces
        }


    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);


});



//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function bG() {

    document.body.style.backgroundColor = "teal";
};

function image() {
    
    document.getElementById("web").src = "../project3/images/imgWhale.jpg";
};

function engineer() {

    document.getElementById("web").src = "https://www.uvm.edu/news/story/whales-ecosystem-engineers";
};

function feces() {
    document.getElementById("web").src = "/images/WhalePump.jpg";
    pauseVideo(vid);
    alert("Click play after looking over document :)")


};