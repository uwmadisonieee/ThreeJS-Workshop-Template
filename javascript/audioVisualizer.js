var camera, controls, scene, renderer;
var meshArray = [];

function init() {

}

function onWindowResize() {
    
}

function animate() {

}

function render() {
    renderer.render( scene, camera );
}

// All audio functionallity will be taken care when setupAudio() is called
// The function starts playing the audio and has all data saved to frequencyData
var audioCtx, analyser, audioDiv, audioSrc, frequencyData;

function setupAudio() {
    audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    audioDiv = document.getElementById('myAudio');
    audioSrc = audioCtx.createMediaElementSource(audioDiv);   
    
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);
    analyser.connect(audioCtx.destination);
    
    analyser.fftSize = 512; 
    frequencyData = new Uint8Array(analyser.frequencyBinCount);

    audioDiv.src = "audio/MapleLeafRag.mp3"
    audioDiv.load();
    audioDiv.play();
}