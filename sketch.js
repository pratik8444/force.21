
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world
var engine
var ball
var ground
var leftWall
var writeWall
function preload()
{
	
}

function setup() {
	createCanvas(1400,500);
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2


	}

    ground = new Ground (750,450,1400,9);
	leftWall= new Ground(1000,400,10,100);
	writeWall=new Ground (1200,400,10,110);




	//Create the Bodies Here.
      
	ball=Bodies.circle(100,200,10,ball_options);
	World.add(world,ball)
	ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {
  
  background("black");

 ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  leftWall.show();
  writeWall.show();
  drawSprites();
  

if	(keyCode === UP_ARROW)
	 { Matter.Body.applyForce(ball,ball.position,{x:05,y:-1});
	 }

	 
	
	}
 

