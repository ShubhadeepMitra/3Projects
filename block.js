class Block {
    constructor(x,y,width,height){
        this.Visiblity = 255;
        var options={
            isStatic: false,
            'friction':1,
            'density':1,
            'restitution':0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);

        this.width=width;
        this.height=height;
         World.add(world,this.body);
    
    }

    display(){
        if(this.body.speed < 3){
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
        
      }
     
     
     
     }