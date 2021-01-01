class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            pop();
        }
        }
    