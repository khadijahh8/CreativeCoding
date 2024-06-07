let font;

//loading the font
function preload(){
  font = loadFont("Comfortaa-Light.ttf");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(252,231,204);

  // Create a graphics object to draw off-screen
  let cnv1 = createGraphics(width, height);
  
  // Set the fill color for the ellipse and draw it
  cnv1.fill(225, 225, 225); 
  cnv1.ellipse(width / 2, height / 2, 200, 200);  // x, y, width, and height

  // Set the text properties before drawing the text
  cnv1.fill(0); // Set the fill color to black for the text
  cnv1.textFont(font); // Set the font
  cnv1.textSize(30); // Set the text size
  cnv1.textAlign(CENTER, CENTER); // Center the text horizontally and vertically

  // Draw the text
  let textX = width / 2;
  let textY = height / 2;
  cnv1.text('olivia wilson', textX, textY); // text, x, y

  // Draw the lines for decoration
  cnv1.stroke(0); // Set the stroke color to black
  cnv1.strokeWeight(2); // Set the stroke weight (thickness) to 2

  // Line above the text
  cnv1.line(textX - 75, textY - 40, textX + 75, textY - 40); // x1, y1, x2, y2

  // Line below the text
  cnv1.line(textX - 75, textY + 40, textX + 75, textY + 40); // x1, y1, x2, y2

  // Draw the graphics object onto the main canvas
  image(cnv1, 0, 0); // putting the sub canvas inside the main canvas
}
