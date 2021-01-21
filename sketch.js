const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,chain,ground1;

function preload()
{backgroundImg=loadImage("bg.png")
    changingTime();
}

function setup() {
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    block1=new Block(330,235,30,40);
    block2=new Block(360,235,30,40);
    block3=new Block(390,235,30,40);
    block4=new Block(420,235,30,40);
    block5=new Block(450,235,30,40);
    
    ground1=new Ground(390,265,200,10)

    block6=new Block(360,195,30,40);
    block7=new Block(390,195,30,40);
    block8=new Block(420,195,30,40);

    block9=new Block(390,155,30,40);

    polygon=new Attacker(190,200,10,10)

    chain= new Slingshot(polygon.body,{x:190,y:200})
}

function draw(){
    if(backgroundImg){
    background(backgroundImg)

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    polygon.display();
    chain.display();
    ground1.display();

    drawSprites();
}
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain.fly()
}

async function changingTime(){
 var backgroundTime=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")   
var backgroundTimeJSON=await backgroundTime.json();
console.log(backgroundTimeJSON);
var datetime=backgroundTimeJSON.datetime

var hour=datetime.slice(11,13);

if(hour>6 && hour <18){
    bg="bg.png"
}
else{
    bg="bg2.jpg"
}
backgroundImg=loadImage(bg);
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(polygon.body)
    }
}