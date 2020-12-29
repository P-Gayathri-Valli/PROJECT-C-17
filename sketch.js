
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var score=0
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  
  ground.velocityX=-4;
  
  
}


function draw() {
background("white");
   console.log(ground.x)

    monkey.collide(ground);

  if(keyDown("space")&&monkey.x<=80){
    monkey.velocityY=-10;
    
  }
  
  ground.x=ground.width/2;
    monkey.velocityY = monkey.velocityY + 3
  
obstacleGroup= new Group();
  FoodGroup= new Group();
  
  food();

  stones();
  obstacleGroup.depth=monkey.depth;
  FoodGroup.depth=monkey.depth;
  monkey.depth=monkey.depth +2;

  survivalTime=Math.ceil(frameCount/frameRate())
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white")
  text("SCORE:"+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black")
  text("SURVIVAL TIME:"+survivalTime,200,50)
}

function food(){
  
  if (frameCount%80===0){
  banana=createSprite(200,100,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1
  banana.y=Math.round(random(120,200))
  banana.velocityX=-3
  banana.SetlifeTime=1
    FoodGroup.add(banana);
}
}


function stones(){
  
  if (frameCount%300===0){
  obstacle=createSprite(200,315,20,20);
  obstacle.velocityX=-(6 + score/100);
  obstacle.addImage( obstacleImage);
  obstacle.scale=0.1
  
  obstacle.SetlifeTime=1
    obstacleGroup.add(obstacle)
    
}
}



