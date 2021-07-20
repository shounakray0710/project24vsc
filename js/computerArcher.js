class ComputerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      Matter.Body.setAngle(this.body,PI/2);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
    }
  
   
    display() {
      var angle = this.body.angle;

      

      var pos = this.body.position;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
  
      pop();
    }
  }
  