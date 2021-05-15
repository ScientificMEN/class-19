function setup() {
  createCanvas(800,400);

  box= createSprite(400, 200, 50, 50);
  box.shapeColor="blue";
  rectangle=createSprite(400,300,30,20);
  rectangle.shapeColor="red";
}

function draw() {
  background(255,255,255);
  
rectangle.x=mouseX;
rectangle.y=mouseY;

if(rectangle.x-box.x < box.width/2+rectangle.width/2
  && box.x-rectangle.x<box.width/2+rectangle.width/2
  && rectangle.y-box.y<box.height/2+rectangle.height/2
  && box.y-rectangle.y<box.height/2+rectangle.height/2){

rectangle.shapeColor="green";
box.shapeColor="black";
  }
  
else{
box.shapeColor="blue";
rectangle.shapeColor="red";

}
  drawSprites();
}