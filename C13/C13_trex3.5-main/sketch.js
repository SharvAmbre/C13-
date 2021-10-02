var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  Obs1 = loadImage("obstacle1.png");
  Obs2 = loadImage("obstacle2.png");
  Obs3 = loadImage("obstacle3.png");
  Obs4 = loadImage("obstacle4.png");
  Obs5 = loadImage("obstacle5.png");
  Obs6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 161) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  drawSprites();
}
function spawnObstacles() {
  if (frameCount % 60 === 0) {
   Obs=createSprite(600, 165, 10, 40);
   Obs.velocityX= -2
  var r1 = Math.round(random(1,6))
  switch(r1) {
case 1:Obs.addImage(Obs1);
break;  
case 2:Obs.addImage(Obs2);
break;
case 3:Obs.addImage(Obs3);
break;
case 4:Obs.addImage(Obs4);
break;
case 5:Obs.addImage(Obs5);
break;
case 6:Obs.addImage(Obs6);
break;
default:break
} 
Obs.scale=0.55;
Obs.lifetime=390
}
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 220
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

