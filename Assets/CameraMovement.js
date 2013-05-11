#pragma strict

private var initialPosition = Vector3.zero;
private var initialSize = 0.0;
private var rotation = 720.0;

function Start () {
	initialPosition = transform.localPosition;
	transform.localPosition = Vector3.zero;
	
	initialSize = camera.orthographicSize;
	camera.orthographicSize = 0.1;
	
	transform.localRotation = Quaternion.AngleAxis(rotation, Vector3.forward);
}

function Update () {
	transform.localPosition = ExpEase.Out(transform.localPosition, initialPosition, -0.5);
	camera.orthographicSize = ExpEase.Out(camera.orthographicSize, initialSize, -0.5);
	rotation = ExpEase.Out(rotation, 0.0, -2.0);
	transform.localRotation = Quaternion.AngleAxis(rotation, Vector3.forward);
}
