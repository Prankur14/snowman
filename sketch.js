const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;

var engine;
var world;

var snowX = 400;
var snowY = 0;



var snow = [];


function preload() {
  bg = loadImage('snow1.jpg');

  snowMan = loadImage('snowman.png');

}
function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  if (frameCount % 90 === 0) {
    for (var i = 0; i < 100; i++) {
      snow.push(new Snow((random(0, 800)), random(-1000, 0)));
    }
  }
  fullscreen(true);


}

function draw() {
  background(bg);

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
  }
// /\
  // scale(0.5)
  image(snowMan, snowX,400);
  if (keyIsDown(LEFT_ARROW)) {
    snowX = snowX - 5;
    snowMan = loadImage('snowman_left.png')
  }

  if (keyIsDown(RIGHT_ARROW)) {
    snowX = snowX + 5;
    snowMan = loadImage('snowman.png')
  }

  if(second()%5 === 0){
    fullscreen(true);
  }

  drawSprites();
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}