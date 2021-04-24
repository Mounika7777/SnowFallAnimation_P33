const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles = [];
var plinkos=[];

function preload(){
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;

  
  
  
  

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bg);  
  drawSprites();

  if(frameCount %30 === 0){
    particles.push(new Particle(random(100,600),10,10));
}
 
 for (var h=0; h<particles.length; h++){
    particles[h].display();
  }

  
 
}