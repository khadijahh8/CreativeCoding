let mic; 
let pinkShades = [ // array of pinks 
    "#ffb6c1",
    "#ff69b4",
    "#ff1493",
    "#db7093",
    "#ffc0cb"
]

function setup() {
  // full screen canvas
	createCanvas(windowWidth, windowHeight);
	background(255);//white background
	mic = new p5.AudioIn(); 
  //to get the audio from computer mic
	mic.start();
}

function draw() {
	
	let micLevel = mic.getLevel() * height * 3; // increase size based on audio level
	fill(random(pinkShades));
  //filling the shape with random pink colors
	drawHeart(width/2, height/2, micLevel); 
  //drawiing the heart on the middle of the canvas 
}

///function for making the heart shape
function drawHeart (x,y,size){
  beginShape();
  vertex(x,y);
  bezierVertex(x + size / 2, y - size / 2, x + size, y + size / 3, x, y + size);
  bezierVertex(x - size, y + size / 3, x - size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
  
