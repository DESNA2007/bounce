const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,ball;


function setup() {
  createCanvas(400,400);
myEngine = Engine.create();
myWorld = myEngine.world;

var ground1={
isStatic:true
}
ground= Bodies.rectangle(200,350,100,70,ground1);
World.add(myWorld,ground);

var options={
  restitution: 1.0
}
ball=Bodies.circle(180,150,10,options);
World.add(myWorld,ball)
console.log(ground.type)
 console.log(ground.position.x)
 console.log(ground.position.y)
}


function draw() {
  background(0); 
  Engine.update(myEngine);
  rectMode(CENTER)
  ellipseMode(CENTER)
  //rect(200,200,50,50);
  rect(ground.position.x,ground.position.y,400,50)
 circle(ball.position.x,ball.position.y,50)
  drawSprites();
} 