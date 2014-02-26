#pragma strict

var speedOfLaser:int;

function Start () {

}

function Update () {
	transform.Translate(Vector3.right * speedOfLaser * Time.deltaTime);
}

function OnBecameInvisible ()
{
	Destroy(this.gameObject);
}