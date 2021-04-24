class Particle {
    constructor(x,y,r) {
      var options = {
        restitution: 0.1,
        density:0.002,

         }

      this.r = r;
      this.body = Bodies.circle(x,y,this.r,options);
      this.image = loadImage("snow5.webp");
      //this.color=color(random(0,255), random(0,255), random(0,255));
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      //fill(this.color);
      ellipseMode(RADIUS);
      //ellipse(0,0,this.r,this.r);
      image(this.image, this.body.position.x, this.body.position.y,40,40);
      pop();
    }
  };
