var word ="Bath Spa"; //variable for string data
var font;

function preload(){
  font= loadFont("Jacquard12-Regular.ttf")
}



function setup() {
  createCanvas(600, 400);
  textFont(font,70); //font , text size
  textAlign (CENTER);
 
}

//coding an interactive background that changes color
function draw (){
  //background color cahnge based on mouse position
  //This function 'map' need to include an input and output
  var r = map(mouseX,0, width,0,225);
  var g = map (mouseY ,0 ,height,0,225);
  
  var b = 124; //blue
  
  background(r,g,b); //interactive background
  fill(225); //text color
  text(word, width/2 ,height/2) // make it middle of canvas
}

