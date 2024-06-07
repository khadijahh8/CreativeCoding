function setup() {
  //canvas size
	createCanvas(500, 500);
	frameRate(100);
}

function draw() {
	fill(255, 10);
	noStroke();
  //redraw the canvas every time
	rect(0, 0, 2000, 2000);
   //shapes color begie
	let A = random(233, 233);
	let B = random(179, 179);
	let C = random(114, 114);

	// Draw the butterfly body
	fill(50);
  //for the middle part of the butterfly body
  //mouse x and y for mouse trace
	ellipse(mouseX, mouseY, 30, 100); 

	// Draw the butterfly wings
	fill(A, B, C);
  //75 for the right angle
	ellipse(mouseX + 75, mouseY - 50, 100, 150); // Right upper wing
	ellipse(mouseX - 75, mouseY - 50, 100, 150); // Left upper wing
	ellipse(mouseX + 75, mouseY + 50, 100, 150); // Right lower wing
	ellipse(mouseX - 75, mouseY + 50, 100, 150); // Left lower wing

	// Draw butterfly lines
	stroke(50);
	strokeWeight(2);
	noFill();
	bezier(mouseX - 10, mouseY - 50, mouseX - 30, mouseY - 80, mouseX - 20, mouseY - 100, mouseX - 40, mouseY - 120);
	bezier(mouseX + 10, mouseY - 50, mouseX + 30, mouseY - 80, mouseX + 20, mouseY - 100, mouseX + 40, mouseY - 120);
}
