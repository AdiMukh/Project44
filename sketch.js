var player;
var playerImg, npcImg;
var obstacleImg;
var ground1, groundImg;
var invisGround;
var x = 50;
var treeImg;
var score = 0;
var gameState = 0;

function preload()
{
  playerImg = loadImage("pc.png");
  npcImg = loadImage("npcs.png");
  obstacleImg = loadImage("obstacle.png");
  groundImg = loadImage("ground2.png");
  treeImg = loadImage("tree.png");

}

function setup() 
{
  createCanvas(800,400);

  player = createSprite(200, 285, 20, 20);
  player.addImage(playerImg);

  ground1 = createSprite(400, 360, 800, 40);
  ground1.addImage(groundImg)
  ground1.velocityX = -5; 
  ground1.x = ground1.width /2;
 
}

function draw() {
  background(255);  

    if(keyDown("space"))
    {
      player.velocityY = -12;
    }

    player.velocityY = player.velocityY+0.8; 


    ground1.velocityX = -5;
    
    if (ground1.x < 0)
   {
    ground1.x = ground1.width/2;
   }

   player.collide(ground1)

  drawSprites();

  

}

