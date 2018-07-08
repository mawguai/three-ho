let scene = new THREE.Scene( );
let camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.set(0, 0, 70);
control = new THREE.OrbitControls( camera, renderer.domElement );

let floorGeometry = new THREE.PlaneBufferGeometry( 200, 200);
let floorMaterials = new THREE.MeshPhongMaterial( {map : new THREE.TextureLoader().load('img/floor.jpg'), side : THREE.DoubleSide } );
let floor = new THREE.Mesh( floorGeometry, floorMaterials );
floor.position.set( 0, - 1, 0 );
floor.rotation.x = - Math.PI * 0.5;
floor.receiveShadow = true;
floor.position.y = -11;
scene.add( floor );

// let ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1.2 );
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 80, 0 );
spotLight.angle = 0.5;
spotLight.penumbra = 0.1;
spotLight.decay = 1.5;
spotLight.intensity = 2;
spotLight.distance = 200;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 10;
spotLight.shadow.camera.far = 200;
scene.add( spotLight );

let ambient = new THREE.AmbientLight( 0xFFFFFF, 0.2 );
scene.add( ambient );

let loader = new THREE.FontLoader();
loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

    let textMaterial = new THREE.MeshLambertMaterial({color: 0x9e0ad8});

    let textGeometry = new THREE.TextGeometry( 'Xebia', {
        font: font,
        size: 20,
        height: 3,
        curveSegments: 20,
        bevelEnabled: false,
        bevelThickness: 2,
        bevelSize: 2,
        bevelSegments: 10
    } );

    let textMesh = new THREE.Mesh(textGeometry, textMaterial);

    textMesh.position.set( -35, -10, 0);

    scene.add( textMesh );
} );



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