#pragma strict

function Start () {
	renderer.material.color.a = 0.0;
	
	while (!Input.GetKeyDown('x')) yield;
	
	while (true) {
		renderer.material.color.a = ExpEase.Out(renderer.material.color.a, 1.0, -1.0);
		yield;
	}
}
