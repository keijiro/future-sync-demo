#pragma strict

function Start() {
	while (true) {
		while (!Input.GetMouseButton(0)) yield;
		
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		var hitFlag = Physics.Raycast (ray, hit, 100);

		while (Input.GetMouseButton(0)) {
			if (hitFlag && hit.collider) {
				var target = hit.collider.gameObject.transform.parent.rigidbody;
				
				var m2 = Input.mousePosition;
				m2.z = 10;
				m2 = Camera.main.ScreenToWorldPoint(m2);
				
				target.AddForce((m2 - target.position).normalized * 40);
			}
			
			yield;
		}
	}
}
