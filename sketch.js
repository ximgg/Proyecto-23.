var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var sky, skyImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	skyImg=loadImage("sky.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="black";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Crea el Suelo
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	 

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor="white";

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor="white";

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor="white";

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(skyImg);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
  helicopter();
  
  Matter.Body.translate(packageBody, {x:0, y:0});
  
}
function helicopter () {

	if(keyCode === LEFT_ARROW){
		helicopterSprite.x= helicopterSprite.x-5;
		Matter.Body.translate(packageBody, {x:-5, y:0});
	   }
	   if(keyCode === RIGHT_ARROW){
		helicopterSprite.x= helicopterSprite.x+5;
		Matter.Body.translate(packageBody, {x:+5, y:0});
		
		}
	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	}
	
}

