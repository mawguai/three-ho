let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create the shape
let geometry = new THREE.BoxGeometry( 1, 1, 1);

// Create a material
let material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });

// Create the cube
let cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 3;

// Game logic
let update = function()
{
    cube.rotation.x += 0.01;
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