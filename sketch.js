var car;
var wall;
var speed, weight;
function setup() {
  createCanvas(windowWidth,400);
  car = createSprite(40, 200, 50, 30);
  wall = createSprite(width-50,200,30,150);
  wall.shapeColor = "brown"
  speed = Math.round(random (55,90));
  weight=  Math.round(random (400,1500));
}

function draw() {
  background(0);  
  car.velocityX = speed;
  if(wall.x-car.x< (car.width+wall.width)/2){
    car.velocityX = 0;
    var defermotion = 0.5*weight*speed*speed/22500
    console.log(defermotion)
    if(defermotion > 180){
      car.shapeColor= color(255,0,0)
    } else if(defermotion < 180 && defermotion > 100){
      car.shapeColor= color(230,230,0)
    } else if(defermotion<100){
      car.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
  text("Defermotion : "+Math.round(defermotion),width-200,50,fill("white"))
  text("Speed : "+Math.round(speed),width-200,70,fill("white"))
  text("weight : "+Math.round(weight),width-200,90,fill("white"))
}