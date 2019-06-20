
//a point on the coord
function Point (x, y)
{
  return{x: x, y: y};
}

//constructorr
function Hex(q, r, s)
{
  if (Math.round(q + r + s) !== 0) throw "q, r, s doesnt add to 0";
  return {q : q, r: r, s: s};
}

//equality
function isEquals(hexa, hexb)
{
  return (hexa.q == hexb.q && hexa.r == hexb.r && hexa.s == hexb.s);
}

//coor arithmetic
function hexAdd(a, b)
{
  return Hex(a.q + b.q, a.r + b.r, a.s + b.s);
}
function hexSub(a, b)
{
  return Hex(a.q - b.q, a.r - b.r, a.s - b.s);
}
function hexMult(a, k)
{
  return Hex(a.q * k, a.r * k, a.s * k);
}

//essentially the unit vectors of the hex grid
var hexDirs = [Hex(1,0,-1), Hex(1,-1,0), Hex(0,-1,1), Hex(-1,0,1), Hex(-1,1,0), Hex(0,1,-1)];
//check neighbors
function hexDir(dir)
{
  if(!(0 <= dir && dir <= 5)) throw "dir is out of range";
  return hexDirs[dir];
}
function getHexNeighbor(a, dir)
{
  return hexAdd(a, hexDirs[dir]);
}
