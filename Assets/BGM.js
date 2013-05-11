#pragma strict

function Start () {
	DontDestroyOnLoad(gameObject);

	while (!Input.GetKeyDown('z')) yield;
	
	while (audio.volume > 0.1) {
		audio.volume -= Time.deltaTime / 4.0;
		yield;
	}
	
	audio.Stop();
}
