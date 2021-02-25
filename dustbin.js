class Dustbin {
    constructor( x , y , width , height) {
        var options = {
            
            isStatic:true,
            'resitution':0.3,
            'friction':0.5,
            'density':1.2,

        }
        this.body = Bodies. circle ( x, y,radius,options);
        this.radius = this.radius;
       

        World.add(world , this.body);
    }
      display(){
          ellipseMode(RADIUS);
          fill ("red");

          rect(this.body.position.x , this.body.position.y ,this.radius);

      }

};