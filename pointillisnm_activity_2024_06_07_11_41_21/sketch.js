var img, x, y;

function preload() {

img = loadImage("vartoon2.jpg");

}

function setup() {

createCanvas (400, 400);

background(0);

noStroke();

}

function draw() {

x = random(width); // random is for the plure

y = random(height);

var c = img.get(x, y);

fill(c[0], c[1], c[2], 50); // 50 is the color and speed 

ellipse (x, y, 30, 30);

}