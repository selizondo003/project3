import { cueTimer } from "./modules/cuepoints.js";


document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [

        {seconds: 2,callback: image},
        {seconds: 13,callback: bG},
        {seconds: 97, callback: engineer},
        {seconds: 109, callback: fun},
        {seconds: 152, callback: feces}
    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);

    const vid = document.querySelector('#vid');
    const selectTxt = document.querySelector("#text-track");
    const display = document.getElementById("transcript");
    /*const transcript_en = document.getElementById("transcript-en");
    const transcript_es = document.getElementById("transcript-es");
    const transcript_fr = document.getElementById("transcript-fr");*/
    const showHide = document.getElementById("show-hide");
    

    //section list
    const saveMovement = document.getElementById('saveMovement');
    const ecoEngineer = document.getElementById('ecoEngineer');
    const whalePoop = document.getElementById('whalePoop');
    const whaleCarcas = document.getElementById('whaleCarcas');


    selectTxt.addEventListener("change", (e) => {
        const id = e.target.value;
        selectTrack(e, vid, id);
    });

   /* transcript_en.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("captions/whale.vtt", display);
        });

    transcript_es.addEventListener(
        "click",
         function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/spanish.vtt", display);
        });
    
    transcript_fr.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/french.vtt", display);
            console.log("french transcript")
        });
*/




    showHide.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            
            //webvttTranscript("captions/whale.vtt", display);
                if (e.target.innerHTML == "Show Transcript") {
                    e.target.innerHTML = "Hide Transcript";
                    display.style.display = "block";
                } else {
                    e.target.innerHTML = "Show Transcript";
                    display.style.display = "none";
                }
                console.log("test-showHide");
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
        console.log("Ready");
    }, 5);


});



//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function bG() {

    document.getElementById("web").src = "https://en.wikipedia.org/wiki/Right_whale";
    console.log("wiki");
};

function image() {
    
    document.getElementById("web").src = "images/imgWhale.jpg";
    console.log("whale picture");
};

function engineer() {

    document.getElementById("web").src = "https://www.uvm.edu/news/story/whales-ecosystem-engineers";
    console.log("eco-engineer");
};

function fun() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Whales are SUPER cool!</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    console.log("cool");
}

function feces() {
    document.getElementById("web").src = "images/WhalePump.jpg";
    pauseVideo(vid);
    alert("Click play after looking over document :)");
    console.log("feces");


};