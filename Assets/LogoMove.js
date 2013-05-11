#pragma strict

private var initialPosition = Vector3.zero;

function Start () {
	initialPosition = transform.localPosition;
	transform.localPosition.x += 15.0;
	
	yield WaitForSeconds(5.0);
	
	while (!Input.GetMouseButtonDown(0)) {
		transform.localPosition = ExpEase.Out(transform.localPosition, initialPosition, -1.0);
		yield;
	}
	
	Destroy(gameObject);
}
