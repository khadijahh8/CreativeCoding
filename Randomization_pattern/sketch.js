//setup Canvas
function setup() {
  createCanvas(400, 400);
  background(255,204,229);
  
  // Define parameters for the pattern
  let rows = 5;
  let cols = 5;
  //making the cells fit in the Canvas
  let cellSize = width / cols;
  
  // Loop through rows and columns
  for (let A = 0; A < rows; A++) {
    for (let B = 0; B< cols; B++) {
      //removing strok 
      noStroke();
      //randam decsion between circle and triangle
      let shape = random(["circle", "triangle"]);
      
      //randomally choosing color (pink)
      let r = random(185,109,180,2);
      let g = random(73,19,69,2);
      let b = random(255,153,204,2);
      fill(r, g, b);
      
         // Adding white stroke
      stroke(255);
      strokeWeight(2);
      
    
      // drawing cicle or triangle based on desicion
   
        if (shape === "circle") {
        ellipse(B * cellSize + cellSize / 2, A * cellSize + cellSize / 2,               cellSize, cellSize);
   } 
        else if (shape === "triangle") {
        triangle(B * cellSize, A * cellSize + cellSize, B * cellSize + cellSize         / 2, A * cellSize, B* cellSize + cellSize, A * cellSize + cellSize);
      }
    }
  }
}
