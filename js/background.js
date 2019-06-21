var canvas;
var mainLayout;
var hexes = [];
var center;
var size;
var origin;
var ring;

function windowResized()
{
  resizeCanvas(windowWidth,windowHeight);
  origin = Point(windowWidth/2,windowHeight/2);
  resizeLayout(mainLayout, size, origin);
}
//generate the board once. its a hegagonal board
function generateBoard(radius)
{
  for(var q = -radius; q <= radius; q++)
  {
    var r1 = Math.max(-radius, -q - radius);
    var r2 = Math.min(radius, -q + radius);
    for(var r = r1; r <= r2; r++)
    {
      hexes.push(Hex(q,r,-q-r));
    }
  }
}


function setup()
{
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  size = Point(50, 50);
  origin = Point(windowWidth/2,windowHeight/2);
  mainLayout = Layout(pointyOrient,size,origin);
  generateBoard(10);
  center = Hex(0,0,0);
  console.log(windowHeight);
  ring = getRing(center, 3);
}

function draw()
{
  background(100);
  fill(255);

  for (var i = 0; i < hexes.length; i++)
  {
    drawHex(mainLayout, hexes[i], 255);
  }
  drawHex(mainLayout, center, '#e75f8d');
  drawHex(mainLayout, Hex(2,5,-7), '#e75f8d');

  for (var i = 0; i < ring.length; i++)
  {
    drawHex(mainLayout, ring[i], 100);
  }
}
