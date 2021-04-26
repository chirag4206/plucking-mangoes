
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var slingshot;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,200,30);
	mango3=new mango(1000,200,30);
	mango4=new mango(970,100,30);
	mango5=new mango(1200,250,30);
  

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1 = new Stone(200,400);
	slingshot1 = new SlingShot(stone1.body,{x:240,y:420})
  
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  slingshot1.display();

  groundObject.display();
}

function mouseDragged(){
    
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
   
}


function mouseReleased(){
    slingshot1.fly();
    
}
function detectcollision(lstoneObj,lmango){
  mangoBodyPosition=lmango.body.setPosition
  stoneObjBodyPosition=lstone.body.setPosition

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition,mangoBodyPoisition.y)
  if(distance<=lmango.r+lstoneObj.r){
matter.Body.setStatic(lmango.body,false);
  }
}