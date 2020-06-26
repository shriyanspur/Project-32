class Box {
  constructor(x,y,width,height) {
    var options = {
      restitution: 0.3,
      density:0.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }

  score() {
    if (this.Visibility < 0 && this.Visibility >- 105) {
      score++;
    }
  }

  display(){
  if (this.body.speed < 3) {
    var pos =this.body.position;
    rectMode(CENTER);
    fill(16, 252, 0);
    rect(pos.x, pos.y, this.width, this.height);
  }
  else {
    World.remove(world, this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(255, this.Visibility);
    pop();
  }

  }
}
