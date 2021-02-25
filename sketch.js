//creates the box sprite
var movingBox;
//creates the blocks
var block1;
var block2;
var block3;
var block4;
//creates the canvas
var canvas;
//adds the music
var music;
//creates the edges
var topEdge;
var bottomEdge;
var rightEdge;
var leftEdge;

function preload()
{
  //loads the sound
  music = loadSound("music.mp3");
}

function setup()
{
  //creates the canvas
  canvas = createCanvas(800,600);

  //creates the box sprite and gives velocity to the box sprite
  movingBox = createSprite(400, 25, 30, 30);
  movingBox.shapeColor = "white";
  movingBox.x = Math.round(random(20, 750));
  movingBox.velocityX = 2;
  movingBox.velocityY = 5;

  //creates the blocks
  block1 = createSprite(100, 595, 195, 30);
  block1.shapeColor = "blue";
  block2 = createSprite(300, 595, 195, 30);
  block2.shapeColor = "red";
  block3 = createSprite(500, 595, 195, 30);
  block3.shapeColor = "yellow";
  block4 = createSprite(700, 595, 195, 30);
  block4.shapeColor = "green";

  //creates the edges
  topEdge = createSprite(400, 0, 800, 5);
  bottomEdge = createSprite(400, 600, 800, 5);
  rightEdge = createSprite(800, 300, 5, 600);
  leftEdge = createSprite(0, 300, 5, 600);
}

function draw()
{
  //cleans the background
  background(rgb(169,169,169));

  //makes the box bounceOff from the edges
  bounceOff(movingBox, topEdge);
  bounceOff(movingBox, bottomEdge);
  bounceOff(movingBox, rightEdge);
  bounceOff(movingBox, leftEdge);
  
  //makes the box bounceOff from the blocks
  bounceOff(movingBox, block1);
  bounceOff(movingBox, block2);
  bounceOff(movingBox, block3);
  bounceOff(movingBox, block4);

  if(isTouching(movingBox, block1))
  {
    movingBox.shapeColor = "blue";
  }
  if(isTouching(movingBox, block2))
  {
    movingBox.shapeColor = "red";
  }
  if(isTouching(movingBox, block3))
  {
    movingBox.shapeColor = "yellow";
  }
  if(isTouching(movingBox, block4))
  {
    movingBox.shapeColor = "green";
  }

  //draws the sprites in the screen
  drawSprites();
}
