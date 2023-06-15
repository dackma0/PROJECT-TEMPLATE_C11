var mar, marImg, barco, barcoImg
function preload(){
  marImg = loadImage('sea.png')
  barcoImg = loadAnimation ('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png')

}

function setup(){
  createCanvas(400,400);
  
  mar = createSprite (500, 200);
  mar.addImage(marImg)
  mar.scale = 0.25
  mar.velocityX = -3
  
  barco = createSprite (200, 200)
  barco.addAnimation('barquinho', barcoImg)
  barco.scale = 0.3  
}

function draw() {
  background("blue");
  
  if (mar.x <-100){
    sea.x = 500
    
  }
    drawSprites();

 
}
