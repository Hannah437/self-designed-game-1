function preload(){
  soldierimg = loadAnimation("images/final/soldier1.png", "images/final/soldier2.png", "images/final/soldier3.png",
   "images/final/soldier4.png", "images/final/soldier5.png", "images/final/soldier6.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  soldier = createSprite(400, 200, 50, 50);
  soldier.addAnimation("soldier", soldierimg);
  soldier.scale = 0.7;

  ground = createSprite(windowWidth/2,390,windowWidth,10)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}