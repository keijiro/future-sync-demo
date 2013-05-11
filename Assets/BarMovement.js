#pragma strict

private var initialPosition = Vector3.zero;

function Start () {
	initialPosition = transform.localPosition;
	transform.localPosition = Vector3.zero;
}

function Update () {
	if (Input.GetMouseButtonDown(0)) {
		for (var col in GetComponentsInChildren.<BoxCollider>())	{
			(col as BoxCollider).enabled = true;
		}
		rigidbody.isKinematic = false;
		rigidbody.velocity = Vector3.zero;
		rigidbody.angularVelocity = Vector3.zero;
		enabled = false;
	} else {
		transform.localPosition = ExpEase.Out(transform.localPosition, initialPosition, -0.5);
	}
}

function OnCollisionEnter(collision : Collision) {
	if (collision.relativeVelocity.magnitude > 0.1) audio.Play();
}
