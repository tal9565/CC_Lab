

let birds = [];
let totalNum = 100; // Decide the number of particles here.

let topCol, botCol;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");

  background(220);
  //  Generate Particles
  for (let i = 0; i < totalNum; i++) {
    birds[i] = new Bird(random(width), random(0, 100));
  }

  //gradient
  topCol = color(146, 88, 146);
  botCol = color(245, 104, 136);
}

function draw() {
  background(160);
  //  Particles update and display

  for (let y = 0; y < height; y++) {
    range = map(y, 0, height, 0, 1);
    let newCol = lerpColor(topCol, botCol, range);
    stroke(newCol);
    line(0, y, width, y);
  }

  while (birds.length >= 200) {
    birds.splice(0, 1);
  }

  for (let i = 0; i < birds.length; i++) {
    let b = birds[i];
    if (keyIsPressed) {
      if (key == "a" || key == "A") {
        b.slowDown();
      }
      if (key == "s" || key == "S") {
        b.speedUp();
      }
    }

    b.update();
    b.display();
    b.bounce();
    b.adjScale(-0.01);
  }

  fill(255);
}

//Background

//  Design interactions by using Mouse or Keyboard
function mousePressed() {
  //..generate an object when mousePressed at the location of  mouseX,mouseY
  birds.push(new Bird(mouseX, mouseY));
}

class Bird {
  //  Constructor Function:properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = 1;
    this.ySpeed = random(-3, 0);
    
    this.scale = 1.0;
  }

  // methods
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);

    fill(0, 150);
    stroke(0);
    beginShape();
    vertex(0, 0);
    vertex(-10, -6);
    vertex(13, 6);
    vertex(15, 6);
    vertex(30, -10);
    endShape(CLOSE);

    pop();
  }
  bounce() {
    if (this.x < 30) {
      this.x = 30;
      this.xSpeed = this.xSpeed * -1;
    } else if (this.x > 490) {
      this.x = 490;
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y < 20) {
      this.y = 20;
      this.ySpeed++;
    }
  }

  // speedUp() {
  //   this.xSpeed = this.xSpeed * 1.05;
  //   this.ySpeed = this.ySpeed * 1.05;
  // }

  // slowDown() {
  //   this.xSpeed = this.xSpeed * 0.95;
  //   this.ySpeed = this.ySpeed * 0.95;
  // }

   adjScale( value ) {
    this.scale += value/2; 
    this.scale = constrain(this.scale, 0.30, 1.00);
  }
}
