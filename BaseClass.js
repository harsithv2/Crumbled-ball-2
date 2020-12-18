class BaseClass{
    constructor(x ,y,width,height,angle){
    var options={
        'isStatic': false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body= Bodies.circle(this.x, this.y, this.r, options)
    
    World.add(world,this.body)


    }
    display() {
        var paperpos=this.body.position;

        push ()
        translate(paperpos.x,paperpos.y)
     
        strokeWeight(3);
        fill (255,0,255)
        ImageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop ()



    }
}