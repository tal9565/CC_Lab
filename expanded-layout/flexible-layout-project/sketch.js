let x;
let h;
let s = 200;
let showCircle = true;
function setup() {
  let cnv = createCanvas(900, 700);
  cnv.parent("canvasContainer");
  colorMode(HSB);
  h = random(255);
  x = width/2;
}

function draw() {
  background(0);
  fill(h, 255, 255)
  if(showCircle){
    circle(x, height/2, s)
  }else{
    for(let i = 0;i < 3; i++){
      rect(x-s/2, height/16*(i+1) + height/4*i, s, height/4)
    }
  }
 
  x=frameCount*3%(width+400)-200;

}

function changeColor(){
  h = random(255)
}
function changeSize(e){
  s = map(e, 0, 100, 5, 395)
}

function changeShape(){
  showCircle = !showCircle;
}