
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	


	//Create the ground here.
	ground = Bodies.rectangle(400, 680, 800, 10 , {isStatic:true} );
	 World.add(world, ground);


	//Create the Bodies Here.

	paper1=new Paper(200,200,40)

box1=new Box(650,590,200,150)
//box2=new Box(490,500,200,25)
//box3=new Box(620,500,25,200)



	Engine.run(engine);
  
}


function draw() {
  
  background("pink");
  Engine.update(engine)
 
  
  paper1.display()
 box1.display()

 //box2.display()
 //box3.display()

 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,10);
}

function keyPressed(){
      if (keyCode === UP_ARROW){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})
	  }

}



