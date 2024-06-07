//setting the variables for the game
let basket;
//array forfood 
let food = [];
// width and height of the basket 
let basketWidth = 130;
let basketHeight = 30;
let score = 0;
//array for the images of  food
let images = [];
//intial game state
let gameState = 'start';

//preload function to load all the images
function preload() {
  images.push(loadImage('burger.png'));
  images.push(loadImage('chicken.png'));
  images.push(loadImage('dounets.png'));
  images.push(loadImage('fries.png'));
  images.push(loadImage('hotdog.png'));
  images.push(loadImage('pizza.png'));
}

//setting up the canvas and basket
function setup() {
  createCanvas(400, 400);
  basket = new Basket();
}

function draw() {
  if (gameState === 'start') {
    showStartScreen();//show the start screen if the game is in the strat state
  } else if (gameState === 'playing') {
    runGame();//run the game screen if the game is in the playing state
  } else if (gameState === 'gameOver') {
    showGameOverScreen();//end the game if the game is in the game over state
  }
}

//editing the first screen and adding background
function showStartScreen() {
  // Gradient background
  setGradient(0, 0, width, height, color(46, 134, 245), color(253, 160, 133));
  
  textSize(32);
  textAlign(CENTER, CENTER);
  
  // animation title
  fill(255, 153, 196, map(sin(frameCount * 0.1), -1, 1, 50, 255));
  stroke(0);
  strokeWeight(5);
  text("Food Catcher Game", width / 2, height / 2 - 40);
  
  textSize(20);
  fill(255);
  strokeWeight(2);
  text("Press SPACE to Start", width / 2, height / 2 + 20);
}

//main game function
function runGame() {
  // Gradient background for the game
  setGradient(0, 0, width, height, color(255, 255, 255), color(200, 200, 255));
  
  basket.show();
  basket.move();//move basket based of user interactivity

  //controls the speed of the food falling
  if (frameCount % 70 == 0) {
    food.push(new Food());
  }

  //looping throught food images
  for (let i = food.length - 1; i >= 0; i--) {
    food[i].fall();
    food[i].show();

    if (food[i].y > height) {
      gameState = 'gameOver';//ending the game and showing game over screen if food falls oss the screen
      food.splice(i, 1);
      break;
      //check if food is in the basket
    } else if (food[i].hits(basket)) { 
      score++; //cont the score and increase it
      food.splice(i, 1);
    }
  }

  //displaying the score on screen
  fill(0);
  textSize(24);
  text('Score: ' + score, 45, 25);
}

//display of the end screen
function showGameOverScreen() {
  // Gradient background
  setGradient(0, 0, width, height, color(255, 100, 100), color(255, 200, 200));
  
  textSize(32);
  textAlign(CENTER, CENTER);
  
  // Add a subtle animation to the Game Over text
  fill(255, 0, 0, map(sin(frameCount * 0.1), -1, 1, 50, 255));
  stroke(0);
  strokeWeight(5);
  text("Game Over", width / 2, height / 2);
  
  textSize(20);
  fill(255);
  strokeWeight(2);
  text("Press 'R' to Restart", width / 2, height / 2 + 40);
}

//for key press event
function keyPressed() {
  if (gameState === 'start' && key === ' ') {
    gameState = 'playing'; //display start screen when user press 'space'
  } else if (gameState === 'gameOver' && key === 'r') {
    resetGame();
  }
}

//for restarting the game
function resetGame() {
  gameState = 'playing'; //seeting the game state
  score = 0;
  food = []; //clear food array
  basket = new Basket();
}

class Basket {
  constructor() {
    this.x = width / 2; //basket intitail postion middle of the screen
    this.y = height - basketHeight;
  }

  show() {
    fill(165, 18, 18); //dark red
    rect(this.x, this.y, basketWidth, basketHeight);
  }
//key press for the basket movment
  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - basketWidth) {
      this.x += 5;
    }
  }
}

class Food {
  constructor() {
    this.x = random(width); //random postion for the food fall
    this.y = 0;//start from the highest point on the screen
    this.size = 20; //size of foon image 'small'
    this.image = random(images); // Random selection of the fruit
  }

  fall() {
    this.y += 5; //increasing y postion for fruit fall process
  }

  show() {
    image(this.image, this.x, this.y, this.size, this.size); // Display the selected image
  }

  hits(basket) {
    return (
      this.y + this.size / 2 > basket.y &&
      this.x > basket.x &&
      this.x < basket.x + basketWidth
    );
  }
}

// Function to create a gradient background
function setGradient(x, y, w, h, c1, c2) {
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);//stroke color
    line(x, i, x + w, i); //draw horizonatl line
  }
}
