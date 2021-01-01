var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofy;
var rope1,rope2, rope3, rope4, rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function setup() {
	createCanvas(800, 700);
	ellipseMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(300,400,250);
	bobObject2= new Bob(345,400,250);
	bobObject3= new Bob(390,400,250);
	bobObject4= new Bob(435,400,250);
	bobObject5= new Bob(480,400,250);

	roofy= new Roof(400,200,300,10);

	rope1= new Rope(bobObject1.body,{x:300,y:200});
	rope2=new Rope(bobObject2.body,{x:345,y:200});
	rope3= new Rope(bobObject3.body,{x:390,y:200});
	rope4=new Rope(bobObject4.body,{x:435,y:200});
	rope5=new Rope(bobObject5.body,{x:480,y:200});

	Engine.run(engine);
    
}


function draw() {
  ellipseMode(CENTER);
  background(255,255,255);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofy.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===24){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	bobObject1.isStatic=false;
}
}



