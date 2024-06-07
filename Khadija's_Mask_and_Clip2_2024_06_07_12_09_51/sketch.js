//adding variables 
let img;
let img2;

function preload(){
  img = loadImage("imga.png");
  img2 = loadImage("imgb.png");
}

function setup() {
  createCanvas(580, 500);
  // first picture
  img.resize(200, 200);
  let cnv1 = createGraphics(500, 500);
  
  // Draw three circles to create the mask
  let circleSize1 = 100; // Size of the circles
  let centerX1 = cnv1.width / 2;
  let centerY1 = cnv1.height / 2;
  
  // Draw three circles centered within the sub-canvas
  cnv1.rect(170,175,137,15); // First circle

  
  // Draw a triangle to create the mask
  cnv1.circle(250,300,320); // circle
  
  img2.mask(cnv1);
  image(img2, 95, -15);
  
  // second picture
  img.resize(270, 270);
  let cnv2 = createGraphics(500, 500);
  
  // Draw three circles to create the mask
  let circleSize2 = 100; // Size of the circles
  let centerX2 = cnv2.width / 2;
  let centerY2 = cnv2.height / 2;
  
  // Draw three circles centered within the sub-canva
  cnv2.circle(240,100,540); // First circle
 

  
  // Draw a triangle to create the mask
  cnv2.rect(200,360,200,5); // rectangle
  
  img.mask(cnv2);
  image(img, 170, -1);
  
}


