var bullet;
var wall, thickness;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)

	thickness=random(22,83)

	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)


}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/thickness * thickness * thickness;
	if(deformation<10)
	{
		bullet.shapeColor="green";
	}

	if(deformation > 10)
	{
		bullet.shapeColor="red";
	}

	
  }  
  
  drawSprites();
 
}