class Attacker{
    constructor(x,y,width,height){
        this.image=loadImage("polygon.png")
        this.image.scale=0.1;
        var options={
            'friction':1,
            'density':0.5,
            'restitution':0.5
        }
        width=this.width;
        height=this.height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        fill(125);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(polygon.body,polygon.body.position,{x:85,y:-85});

	}
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain.fly()
}