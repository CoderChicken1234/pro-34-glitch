
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bg;
var bigBomb, mediumBomb, smallBomb; 

var brickdude = [];
var destroyerBall;
var destroyButtonRight;
var DRImg;
var wall;
var helicopter, helicopterImg;
var bricko
var brick_con;
var time;
var aim, aimImg;
var core, coreImg
var distance;


function preload(){
  bg = loadImage('BG.png')
  helicopterImg = loadImage('HALIKOPTER.png')
  aimImg = loadImage('Aim_thingy.png')
  coreImg = loadImage('Energy_core.png')
}

function setup() {
  createCanvas(1500,750);

  engine = Engine.create();
  world = engine.world;

  var rect_options ={
    isStatic:true
  }
  
  for(var i = 0; i<5; i++){  
    var x = random(500, 1000)
    var y = random(200, 500)
    brickoboi = new chopper(x, y, 100, 50)
    brickdude.push(brickoboi)
  }
  /*
  for(var i = 0; i<15; i++){  
    var x = 230
    var y = 100
    brickoboi = new chopper(x, y, 130, 50)
    brickdude.push(brickoboi)
  }
  
  for(var i = 0; i<15; i++){  
    var x = 360
    var y = 100
    brickoboi = new chopper(x, y, 130, 50)
    brickdude.push(brickoboi)
  }
  */

  var helicopter_options = {
    isStatic:true
  }
  var core_options = {
    isStatic:true
  }

  //helicopter = Bodies.rectangle(mouseX, mouseY, 200, 150)
  //World.add(world, helicopter)

  //bricko = new BrickY(100,100,100,50)

 // destroyButtonRight = createImg('Left_arrow.png')
  //destroyButtonRight.position(1200, 50)
  //destroyButtonRight.size(150,100)
  //destroyButtonRight.mouseClicked(drop)


  //destroyerBall = new destroyer_Ball(900, 50, 100,100)
  

  //ground = Bodies.rectangle(850, 700, 1800, 20, rect_options)
  //World.add(world, ground)
  
  

  aim = Bodies.rectangle(mouseX,mouseY,100,100, helicopter_options)
  World.add(world, aim)

  core = Bodies.rectangle(width,height,100,100, core_options)
  World.add(world, core)


  time = millis()

}


function draw() 
{
  rectMode(CENTER)
  imageMode(CENTER)
  ellipseMode(CENTER)
 
  background(51);
  image(bg, 750, 375, width, height)

  distance = dist(aim.position.x, aim.position.y, core.position.x, core.position.y )
  console.log(distance)

  if(distance < 30){
    
  }

  image(coreImg, 750, 350, 250, 250)
  for(var brickoboi of brickdude){
    brickoboi.show()
  }
  //image(helicopterImg, 750, 250, 50, 25)

 //destroyerBall.show()
 
 // rect(850, 700, 1800, 20)
  //bricko.show()
 image(aimImg, mouseX, mouseY, 250, 100)

 

  Engine.update(engine);
  drawSprites()
  
 
}
//function drop(){   
  //Matter.Body.applyForce(destroyerBall.body, {x:0, y:0}, {x:-80, y:-80}) 
//}

