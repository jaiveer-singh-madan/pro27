class Bob
{
    constructor(x,y,r){
    var opTians={
        restitution:1,
        friction:0,
        isStatic:true,
        density:0.8
    } 
    this.x=x;
    this.y=y;
    this.radius=r;
    this.body=Bodies.circle(x,y,r,opTians);
    World.add(world,this.body);
}
   display(){
       ellipseMode(CENTER);
       var ballPos=this.body.position;
       push()
       translate(ballPos.x,ballPos.y);
       strokeWeight(4);
       fill("purple");
       ellipse(0,0,this.r,this.r);
       pop()
   }
}