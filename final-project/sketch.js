
// window.addEventListener("resize", windowResized, false);



let img;
let circles = [];

function preload() {
  img = loadImage("img/zeenbg.png");
}


function setup() {

    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvasContainer");
    cnv.position(0, 0);
    cnv.style('z-index', '-1')
    // Document.getElementById("canvasContainer").center();

    // image(img, 0, 0, width);
    img.loadPixels();

    
  let gridSize = 15;
  for (let i = 0; i < 1000; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let index = (x + y * img.width) * 4;
    let r = img.pixels[index + 0];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    //let a = img.pixels[i + 3];
    circles.push(
      new Circle(x + gridSize / 2, y + gridSize / 2, gridSize / 2, r, g, b)
    );
  }
}

function draw() {
  //image(img, 0, 0);
  background(0,5);
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    //c.adjustSize();
    c.move();
    c.checkMouse();
    c.display();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

class Circle {
  constructor(x, y, rad, r, g, b) {
    this.x = x;
    this.y = y;
    //
    this.colorR = r;
    this.colorG = g;
    this.colorB = b;
    //
    this.scl = random(1.0, 1.5);
    this.rad = rad * this.scl;
    this.radSpeed = 1;
  }
  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  
    
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // in!
      this.x += random(-10, 10);
      this.y += random(-10, 10);
      this.colorR += random(-2, 2);
      this.colorG += random(-2, 2);
      this.colorB += random(-2, 2);
      
      if(this.rad < 50){
         this.rad += this.radSpeed;
      }else{
        this.radSpeed = 0;
      }
    
    } else {
      // out!
    }
  }
  adjustSize() {
    //this.rad *= this.scl;
  }
  display() {
    push();
    noStroke();
    fill(this.colorR, this.colorG, this.colorB, 75);
    circle(this.x, this.y, this.rad * 2);
    pop();
  }
}