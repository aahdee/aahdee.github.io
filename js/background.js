var canvas;
var mainLayout;
var hexes = [];
var center;
var size;
var origin;

function windowResized()
{
  resizeCanvas(windowWidth,windowHeight);
  origin = Point(windowWidth/2,windowHeight/2);
  resizeLayout(mainLayout, size, origin);
}
//generate the board once. its a hegagonal board
function generateBoard(height, width)
{
  for (var r = 0; r < height; r++)
  {
    var rOff = Math.floor((r+1)/2);
    for (var q = -rOff; q < width - rOff; q++)
    {
      hexes.push(Hex(q,r,-q-r));
      hexes.push(Hex(-q,-r, q+r));
    }
  }
}


function setup()
{
  //canvas = createCanvas(400,400);
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  size = Point(20, 20);
  origin = Point(windowWidth/2,windowHeight/2);
  mainLayout = Layout(pointyOrient,size,origin);
  generateBoard(11,11);
  center = Hex(0,0,0);

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

}
