// Andrew Hunt
// SaturnV.js


function init()
{

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement ); 

	var update = function ()
	{

	};

	var render = function ()
	{
		renderer.render(scene, camera);

	}

	var GameLoop = function ()
	{
		requestAnimationFrame( GameLoop );

		update();
		render();
	};

	GameLoop();

}

window.onload = init();