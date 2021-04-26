class Stone {
  constructor(x,y){
    var options = {
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2
    }

  
    this.body = Bodies.rectangle(x,y,50,50);
    this.image = loadImage("images/stone.png");
    World.add(world,this.body);
   }
    display()
   {
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
  }
  