let canvas;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.style(z-index, -1);

}

function draw(){
    background(255);
}

