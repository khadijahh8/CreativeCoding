var img;
function preload () {
img= loadImage ("cartoon.jpg")
}
function setup() {
  createCanvas(600, 600);
   background(0);
}

function draw() {
  background(0);
  x = mouseX  // for mouse interactions 
  y = mouseY
  image (img,0,0);
  var c = get (x,y); // get is the fuction for the  mouse place
  fill(c)
  ellipse (x,y,50,50); // the number 100 makes it circle
}