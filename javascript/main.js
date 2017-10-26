var camera, scene, renderer, mesh;

function init() {

    // Create the scene where we will place everything 
    scene = new THREE.Scene();
    // Creates the camera we use to view the scene
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 400;

    // Load in a texture by referencing the image location from THIS file
    var texture = new THREE.TextureLoader().load( '../textures/earth.jpg' );

    // Creates a sphere and material for it
    var geometry = new THREE.SphereGeometry( 200, 128, 128 );

    // Note that basic materials are not effected by lighting by default
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    // Combines geometry and material together to form a mesh we can then add to scene
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    // The renderer will display everything to screen for us
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    // This is us adding the renderer to the actual HTML DOM
    document.body.appendChild( renderer.domElement );
    
    // This is what we will do when someone resizes the screen
    window.addEventListener( 'resize', onWindowResize, false );

    // Time to start the animation cycle!
    animate();
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.008;

    renderer.render( scene, camera );
}
