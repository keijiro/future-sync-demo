#pragma strict

function Start () {
	while (!Input.GetMouseButtonUp(0)) yield;
	yield;
	yield;
	Application.LoadLevel(1);
}

function Update () {

}