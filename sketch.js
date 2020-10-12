const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var e,w;
var g,b;

function setup() {
  createCanvas(400,400);
  e=Engine.create();
  w=e.world;

  var g_options={
    isStatic: true 
  }

  g=Bodies.rectangle(200,380,200,20,g_options);
  World.add(w, g);
 
  var b_options={
    restitution: 1.0
  }


  b=Bodies.circle(200,100,20,b_options);
  World.add(w, b);

  console.log(g);
  
}

function draw() {
  background("yellow");  
  Engine.update(e);
  fill("green");
  rectMode(CENTER);
  rect(g.position.x,g.position.y,400,10);

  fill
  ellipseMode(RADIUS);
  ellipse(b.position.x,b.position.y,20);
  drawSprites();
}

