let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create the shape
let geometry = new THREE.BoxGeometry( 1, 1, 1);

// TODO 1 : declare an array of 6 meshBasicMaterial and use a textureLoader (https://threejs.org/docs/#api/loaders/TextureLoader)

// TODO 2 : create the cube using the array
let cube =

control = new THREE.OrbitControls( camera, renderer.domElement );

scene.add( cube );

camera.position.z = 3;



// Game logic
let update = function()
{

};

// Game draw
let render = function()
{
    renderer.render( scene, camera );
};

// run Game Loop (update, render, repeat)
let gameLoop = function()
{
    requestAnimationFrame( gameLoop );

    update();
    render();
};

gameLoop();