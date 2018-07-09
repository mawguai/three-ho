let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// TODO 1 : create the shape, here we are creating a box
let geometry =

// TODO 2 : Add a colour to our box, use a MeshBasicMaterial, to see it
let material =

// TODO 3 : associate the material and the shape in a mesh
let cube =

// TODO 4 : add the cube to the scene

// Game logic
let update = function()
{
    // TODO 5 : BONUS add some rotations to the cube to see the 3D aspect (to see it better update the wireframe property of the material)
};

// Game draw
let render = function()
{
    renderer.render( scene, camera );
};

// run Game Loop (update, render, repeat)
let gameLoop = function()
{
    requestAnimationFrame( gameLoop ); // a tick operation provided by webGl

    update();
    render();
};

gameLoop();