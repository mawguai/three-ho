let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create the shape
let cubeGeometry = new THREE.BoxGeometry( 1, 1, 1);

// TODO 1 : if you want to see the light effect, replace the basicMaterial by one of your choice
// basic is a constant lightning, for more info see : https://files.readme.io/678338b-viro_lighting_models.jpg
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
let cube = new THREE.Mesh( cubeGeometry, cubeMaterials );

control = new THREE.OrbitControls( camera, renderer.domElement );

scene.add( cube );

camera.position.z = 3;

// TODO 2 : declare the two lights (for more info on lightning see the readme)
let ambientLight =
let pointLight =

// TODO 3 : add lights to the scene
....

// Game logic
let update = function()
{
    // TODO 4 : to see the pointLight effect more efficiently, make it move over time
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