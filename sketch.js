
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(100,400,30); // starts from left
	bobObject2 = new Bob(160,400,30);
	bobObject3 = new Bob(220,400,30);
	bobObject4 = new Bob(280,400,30);
	bobObject5 = new Bob(340,400,30);
	roof = new Roof(260,200,290,50); // the object at the top like a roof

	rope1 = new Rope(bobObject1.body,roof.body,-130,0);
	rope2 = new Rope(bobObject2.body,roof.body,-70,0);
	rope3 = new Rope(bobObject3.body,roof.body,-15,0);
	rope4 = new Rope(bobObject4.body,roof.body,45,0);
	rope5 = new Rope(bobObject5.body,roof.body,105,0);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("blue");
  //to display the objects
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

//make bobobject1 move 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50, y:50});
		console.log("keyPress");
	}
}


