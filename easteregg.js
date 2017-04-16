// Contructor function for Easter Eggs, takes a x and y position.
function EasterEgg(x,y) {
  angleMode(DEGREES);     // Set rotate mode to degrees
  this.x = x;
  this.y = y;
  this.colour = floor(random(255));
  this.speed = floor(random(1,5));
  this.rotate = random(-30,30);

// Display function
  this.display = function(){

    // By default 0 ,0 is top left corner. When rotating it will rotate around 0,0
    // But we want to rotate around the centre of the egg so we need to use
    // State function so we can reset back after every egg and translate to the centre of each egg.
    colorMode(HSB);           // Set colour mode
    push();   // Start new state
    translate(this.x, this.y);   // Reset center to the position of the egg
    rotate(this.rotate);        // Rotate the egg
    // Body of egg
    fill(this.colour,255,255);  // Set a random fill colour
    ellipse(0, 0, 80, 120);     // Draw body of egg
    // Ribbon part
    rectMode(CENTER);
    fill(60,255,255);
    rect(0,0,80,10);
    // Bow part
    noFill();
    stroke(255,255,255);
    strokeWeight(4);
    rotate(-20);
    ellipse(-2,-10,10,20);
    rotate(40);
    ellipse(2,-10,10,20);
    pop();                      // Restore the state
  }

// Update function
  this.update = function(){
    this.y = this.y + this.speed; // Move down to the screen
  }

// Check edges function
  this.borders = function(){
    if (this.y > height) {
      this.y = 0;
    } else if (this.x > width){
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    } else if (this.y < 0) {
      this.y = height;
    }
  }
}
