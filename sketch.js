// Happy Easter code
// Mike Glover (2017)

// This is the main script. The Easter Egg object is located in its own file
// called easteregg.js

// Global Variables
eggs = [];    // Setup empty array of eggs

function setup() {
  createCanvas(innerWidth, innerHeight);  // Full screen canvas
  frameRate(30);    // Set framerate to 30 FPS
  for (var i = 0; i < 10; i++) {
    eggs.push(new EasterEgg(random(width),random(height)));   // Add EasterEgg object to array
  }
}

function draw() {
  colorMode(RGB);   // RGB Color Mode
  background(200,230,255);  // Light blue background

  // Loop through the eggs array
  for (var i = 0; i < eggs.length; i++) {
    eggs[i].update();     // Update each egg position
    eggs[i].display();    // Display the egg
    eggs[i].borders();    // Make sure it hasn't gone off the edge
  }
  // Display text
  textAlign(CENTER);
  textSize(48);
  text("Happy Easter!", width/2, height/2);

}
