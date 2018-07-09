let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// TODO n + 1 : set a nice camera position

control = new THREE.OrbitControls( camera, renderer.domElement );

// TODO 1 : create a floor using the PlaneBufferGeometry and the floor.jpg
// TODO 2 : place/rotate the floor, make it receiving shadow

// TODO 3 : add the spotLight (see readme for more info)

// TODO or not TODO : add some ambient

// TODO n : add the Xebia logo see : https://threejs.org/examples/#webgl_geometry_text



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