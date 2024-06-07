//setting up the size of the canvas
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0, 0, 51); // dark blue background

  // Draw stars
  for (let i = 0; i < 50; i++) {
    stroke(255);//adding white stroke to the stars
    //random stroke size for diffrent stars size
    strokeWeight(random(1, 3));
    //random placment of the point
    point(random(width), random(height));
  }

  // Draw the planet surface
  noStroke();
  fill(150, 75, 0);
  ellipse(width / 2, height * 1.5, width * 1.5, height);

  // Alien body
  translate(width / 2, height / 2);
  fill(209, 180, 200);
  beginShape();
  vertex(-20, -40);
  bezierVertex(-40, -80, 40, -80, 20, -40);
  bezierVertex(40, -80, -40, -80, -20, -40);
  endShape(CLOSE);

  // Alien head
  fill(51, 255, 153);
  ellipse(0, -80, 70, 90);

  // Eyes
  fill(255);
  ellipse(-20, -100, 20, 20);
  ellipse(20, -100, 20, 20);

  // Pupils
  fill(50);
  ellipse(-20, -100, 10, 11);
  ellipse(20, -100, 10, 10);

  // Smile
  noFill();
  stroke(50);
  strokeWeight(2);
  beginShape();
  vertex(-20, -70);
  bezierVertex(-10, -60, 10, -60, 20, -70);
  endShape();

  // Antennae
  stroke(50);
  strokeWeight(3);
  line(-10, -120, -20, -140);
  line(10, -120, 20, -140);
}
