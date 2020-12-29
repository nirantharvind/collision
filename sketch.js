var fixrect,movingrect
var object1,object2

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 60, 50);
  movingrect=createSprite(400,100,90,50);
  object1=createSprite(100,200,60,40);
 object2=createSprite(300,200,60,40);
 }

function draw() {
  background(200);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  
  drawSprites();
  movingrect.shapeColor="green"
  fixrect.shapeColor="blue"
  object1.shapeColor="yellow"
  object2.shapeColor="blue"

if(isTouching(movingrect,object1))
{
  movingrect.shapeColor="yellow"
  object1.shapeColor="red"
}
if(isTouching(movingrect,fixrect))
{
  movingrect.shapeColor="yellow"
  fixrect.shapeColor="red"
}

}
function isTouching(obj1,obj2)
{
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2&&obj2.y-obj1.y<obj1.height/2+obj2.height/2)
  {
    return true
  }
  else
  {
   return false
  }
}