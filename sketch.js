var a = 50;
var b = 80;
var c;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(HSB, 152, 31, 65)
  //background(100,100,100);
  fill(random(0,40),100,100);
  noStroke();
  c=a * random(1,5)
  ellipse(mouseX,mouseY,c,c)
}
