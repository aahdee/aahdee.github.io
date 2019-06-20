var canvas;

function windowResized()
{
  resizeCanvas(windowWidth,windowHeight);
}
function setup()
{
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw()
{
  background(255);
  ellipse(160,160,30,30);
}

//creates a hexagon with the center x, y and a radius of size
//pointy size up
class Hex
{
  constructor(q,r,s)
  {
    this.x = x;
    this.y = y;
    this.s = s;
  }


}
