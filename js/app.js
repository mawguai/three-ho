let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create the shape
let cubeGeometry = new THREE.BoxGeometry( 1, 1, 1);

let cubeMaterials =
    [
        new THREE.MeshLambertMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshLambertMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshLambertMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshLambertMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshLambertMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } ),
        new THREE.MeshLambertMaterial( {map : new THREE.TextureLoader().load('img/panda_roux.jpg'), side : THREE.DoubleSide } )
    ];

// Create the cube
let cube = new THREE.Mesh( cubeGeometry, cubeMaterials );

control = new THREE.OrbitControls( camera, renderer.domElement );

scene.add( cube );

camera.position.z = 3;

let ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1.2 );
let pointLight = new THREE.PointLight( 0xFF0040, 4, 50 );

scene.add( ambientLight );
scene.add( pointLight );

// Game logic
let update = function()
{
    let time = Date.now() * 0.0005;
    pointLight.position.x = Math.sin( time * 0.7 ) * 30;
    pointLight.position.y = Math.sin( time * 0.5 ) * 40;
    pointLight.position.z = Math.sin( time * 0.3 ) * 30;
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