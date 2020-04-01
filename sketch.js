var fr,mr;
var g1,g2,g3,g4;

function setup() {
  createCanvas(800,400);
 fr= createSprite(200,200,50,80);
 mr=createSprite(400,200,80,30);
 fr.shapeColor=("green");
 mr.shapeColor=("green");
 mr.velocityY=-5;
 fr.velocityY=5;

 g1= createSprite(200,200,50,50);
 g2=createSprite(300,200,50,50);
 g3= createSprite(400,200,50,50);
 g4=createSprite(500,200,50,50) 

 g1.shapeColor="red";
 g2.shapeColor="red"; 
 g3.shapeColor="red";
 g4.shapeColor="red";
}
function draw() {
  background("yellow"); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  
  if(mr.x-fr.x<fr.width/2+mr.width/2
    && fr.x-mr.x<fr.width/2+mr.width/2){
      mr.velocityX=mr.velocityX*(-1);
      fr.velocityX=fr.velocityX*(-1);

    }
   
if(mr.y-fr.y<fr.height/2+mr.height/2
    && fr.y-mr.y<fr.height/2+mr.height/2){
      mr.velocityY=mr.velocityY*(-1);
      fr.velocityY=fr.velocityY*(-1);
      
    }
  
  if(isTouching(mr,g3)){
    g1.shapeColor=("black");
    mr.shapeColor=("black");
      
  }
else{
  g1.shapeColor=("green");
mr.shapeColor=("green");

} 
  
  drawSprites();
  
}

