#pragma strict

var style:GUISkin;

static var score:int;
static var lives:int;

function OnGUI()
{
	GUI.skin = style;

	GUI.Label(Rect(10,5,100,50),"Score: " +score);
	
	GUI.Label(Rect(110,5,100,50),"Lives: " +lives);
}

function Start () {

}

function Update () 
{
	transform.position.y = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
}