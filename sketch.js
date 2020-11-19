var movingrect;
var fixedrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;

  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
}

function draw() {
  background("black"); 
  movingrect.x = mouseX;
  movingrect.y= mouseY;

 // console.log(movingrect.x-fixedrect.x);
 // console.log(fixedrect.x-movingrect.x);
 // console.log(movingrect.width/2 + fixedrect.width/2);
  
  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2  &&
    fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2  &&
    movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2 )  
{
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
}
else
{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}

  

  drawSprites();
}