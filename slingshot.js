class Slingshot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:0.7
        }
        this.pointB=pointB
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    fly(){
        this.body.bodyA=null
    }
    display(){
        if(this.body.bodyA){
        var pointA=this.body.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
