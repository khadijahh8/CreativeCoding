function setup() {
  createCanvas(400, 400); 
 //canvas size is a one time setup
}


function draw() {
  background(0);
  
  // Body of car half circle
  fill(255)
  let centerX = width / 2; 
  let centerY = height / 2; // to calculate the center of the canvas
  let radiusX = 90;
  let radiusY = 50; // how wide and tall the ellipse is 
  let startAngle = PI;
  let endAngle = TWO_PI; // defining the start and end angles for the arc

  // Draw the half ellipse
  arc(centerX, centerY, radiusX * 2, radiusY * 2, startAngle, endAngle);
  
  
  
 //wheels 
  
  fill(225, 216, 230);
  ellipse(250,270,40,40);
  ellipse(150,270,40,40);
//inside of the wheel
  fill(0,0,0)
  ellipse(250, 270, 20, 20);
  ellipse(150, 270, 20, 20);
  
  //body of car
   
  fill(225, 216, 230);
  rect(107, 200, 190, 50,10);
  
  //lights 
   fill(225, 225, 225);
   ellipse(150, 230, 20, 20);
   ellipse(250, 230, 20, 20);
  
  //s7abat
   stroke(0)
   fill(225,225,255);
  //stroke('rgb(0,0,0)');
 // strokeWeight(3);
  line(150,200,170,170);
  line(250,200,265,175);
  
  
 
  
  
}
