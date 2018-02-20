var camera, controls, scene, renderer;
var meshArray = [];

function init() {

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 500;

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;

    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var material = new THREE.MeshLambertMaterial( { color: 0x0000FF });

    for (i = 0; i < 64; i++) {
        meshArray.push(new THREE.Mesh( geometry, material ));
        meshArray[i].position.x = (i - 32) * 15;
        meshArray[i].updateMatrix();
        scene.add( meshArray[i] );
    }

    var dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( 1, 1, 1 );
    scene.add( dirLight );

    var AmbLight = new THREE.AmbientLight( 0x222222 );
    scene.add( AmbLight );

    window.addEventListener( 'resize', onWindowResize, false );

    setupAudio();

    animate();
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {

    requestAnimationFrame( animate );
    
    analyser.getByteFrequencyData(frequencyData);
    for (i = 0; i < 64; i++) {
        meshArray[i].scale.y = Math.max(1, frequencyData[i]) / 10;
        meshArray[i].material.color.r = frequencyData[i] / 255;
        meshArray[i].material.color.g = frequencyData[i] / 255;
    }

    controls.update();

    render();
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