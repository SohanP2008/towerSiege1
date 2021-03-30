
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(450, 350, 100, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(56,44,44);
  Engine.update(engine);
  ground.display()
  drawSprites();
 
}



