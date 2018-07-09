let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create the shape
let geometry = new THREE.BoxGeometry( 1, 1, 1);

let cubeMaterials =
    [
        new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshBasicMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } )
    ];

// Create the cube
let cube = new THREE.Mesh( geometry, cubeMaterials );

control = new THREE.OrbitControls( camera, renderer.domElement );

scene.add( cube );

camera.position.z = 3;



// Game logic
let update = function()
{
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
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