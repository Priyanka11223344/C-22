const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld,ground,ball;



function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var option ={
    isStatic:true
  }
  ground = Bodies.rectangle(400,380,800,20,option);
  World.add(myWorld,ground);
  var option1 ={
    restitution:1
  }


  ball = Bodies.circle(400,100,20,option1);
  World.add(myWorld,ball);
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  //circle(ball.position.x,ball.position.y,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}