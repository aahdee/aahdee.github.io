//possible palette: http://paletton.com/#uid=64+0u0khvsM7ALMcE-9lGoipLjX

var canvas;
var mainLayout;
var hexes = [];
var center;
var size;
var origin;
var ringOne;
var ringTwo;
var rad = 15;


//timer
var ringOneTimer = 0;
var ringTwoTimer = 0;
setInterval(function () {
  if (ringOneTimer == 0 && ringTwoTimer != rad){ringOneTimer++;} //ensures its the very first iteration
  else if (ringOneTimer == rad)
  {
    ringTwoTimer++;
    ringOneTimer = 0;
  }
  else if (ringTwoTimer == rad)
  {
    ringTwoTimer = 0;
    ringOneTimer++;
  }
  else
  {
    ringOneTimer++;
    ringTwoTimer++;
  }

}, 500);

function windowrarezed()
{
  resizeCanvas(windowWidth,windowHeight);
  origin = Point(windowWidth/2,windowHeight/2);
  resizeLayout(mainLayout, size, origin);
  console.log("wh: " + windowHeight);
  console.log("ww: " + windowWidth);
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
//clears the hexes array and fills it with a board of new size.
function boardReset(newRadius)
{
  hexes.length = 0;
  generateBoard(newRadius);
}


function setup()
{

  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  //rad = Math.max(windowWidth,windowHeight)/200 + 5;
  //rad = 15;
  size = Point(50, 50);
  origin = Point(windowWidth/2,windowHeight/2);
  mainLayout = Layout(pointyOrient,size,origin);
  generateBoard(rad);
  center = Hex(0,0,0);
  console.log("wh: " + windowHeight);
  console.log("ww: " + windowWidth);
  //ring = getRing(center, 3);
}

function draw()
{
  stroke('#ED8FA5');
  background(255);
  fill(255);
  ringAni();

  for (var i = 0; i < hexes.length; i++)
  {
    if (includesHex(ringTwo, hexes[i]))
    {
      drawHex(mainLayout, hexes[i], '#A24994');
    }
    else if (includesHex(ringOne, hexes[i]))
    {
      drawHex(mainLayout, hexes[i], '#882C7A');
    }
    else{drawHex(mainLayout, hexes[i], '#BE73B2');}
  }

  //drawHex(mainLayout, center, '#e75f8d');
  //drawHex(mainLayout, Hex(2,5,-7), '#e75f8d');

  ellipse(windowWidth/2,windowHeight/2, 50,50)

}

//pulsating rings
function ringAni()
{
  ringOne = getRing(center, ringOneTimer);
  ringTwo = getRing(center, ringTwoTimer);
}
