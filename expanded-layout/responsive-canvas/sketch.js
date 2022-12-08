let x = 0;
function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer")
}

function draw() {
  background(220);
  circle(x, height/2, height/2)
  x = frameCount%width;
}
