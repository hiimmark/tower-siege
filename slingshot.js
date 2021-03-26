class Slingshot{
    constructor(bodyA1,pointB1){
        var options = {
            bodyA : bodyA1,
            pointB : pointB1,
            stiffness:0.05,
            length:10
          }
          this.pointB = pointB1;
          this.bodyA = bodyA1

           this.sling = Constraint.create(options);
           
          World.add(gameworld,this.sling);
    }
    display(){



        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8)
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            
            }
            pop();
        }
    }
    fly(){
        this.sling.bodyA = null
    }
}