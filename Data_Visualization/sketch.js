let bg;
// Declaring variables that will be used in the graph
var table;
var Emotions = [];
var Intensity = [];

// An array for the chart colors
var colors = [
    "#FFCC3B",
    "#1B709A",
    "#F95A4E",
    "#238458",
    "purple",
    "rgb(144,190,144)"
];

// Acquiring Data from a CSV file
function preload() {
    table = loadTable("Emotions.csv", "csv", "header");
    bg = loadImage('image.webp');
}

// Filtering data
function setup() {
    createCanvas(windowWidth, windowHeight);
    Emotions = table.getColumn("Emotions");
    Intensity = table.getColumn("Intensity");
}

function draw() {
    image(bg, 0, 0, width, height);
    fill(0);
    noStroke();
    textSize(50);
    text("Emotions Intensity Levels", width / 3, height / 4 - 50);
    translate(width / 3, height / 4);

    // Representation - loop for chart based on intensity levels
    for (var i = 0; i < Emotions.length; i++) {
        var mappedData = map(Intensity[i], min(Intensity), max(Intensity), 100, 400); // Mapping intensity
        fill(colors[i % colors.length]);
        rect(0, i * 70, mappedData, 45);

        // Interaction - reveal intensity alongside bars
        if (mouseY > 120 && mouseX > 260) {
            fill(0);
            textSize(12);
            text(Intensity[i], mappedData + 10, (i * 70) + 20);
        }
        push();

        // Emotion label
        translate(-100, 0);
        fill(0);
        textSize(16);
        textAlign(RIGHT);
        text(Emotions[i], 70, (i * 70) + 25);
        pop();
    }
}