var car , wall;
var speed , weight;


function setup() {
  createCanvas(1500,800);
  car = createSprite(800, 200, 50, 50);
  car.velocityX = -5;

  wall = createSprite(100,200,20,height/2);

 //wall. shapeColor (80,80,80);

  speed = random(55,90);
  weight = random (400,1500);
}

function draw() {
  background(255,255,255);  
  

if(isTouching(car,wall)){
  console.log("isTouching")
  car.velocityX = 0;
 deformation = 0.5 * weight * speed * speed/22500;
 console.log(deformation)
  if(deformation < 100){
  car.shapeColor = color ( 0,255,0);
  console.log("inside < 100")
  }
  
  if(deformation > 180){
    car.shapeColor = color (255,0,0);
    console.log("inside > 180")
  }

  if( deformation > 100 && deformation < 180){
    car.shapeColor = color (230,230,0);
    console.log("inside")
  }
}
  
       drawSprites();
  } 
  
  function isTouching(car,wall){
    if((car.x-car.x < wall.width/2 + car.width/2) &&
    (car.x-wall.x < wall.width/2 + car.width/2) &&
    (wall.y-car.y < wall.height/2+car.height/2)&&
    (car.y-wall.y < car.height/2+wall.height/2))
  {
    return true;
  }
    else{
     return false; 
     }
  }