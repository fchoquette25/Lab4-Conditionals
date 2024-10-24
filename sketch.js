let x
let y
let dx
let dy
let radius
let r
let g
let b
let bg

//TASK 1 - consolidate
  function setup() {
  createCanvas(400, 400);
  createRandomBGColor();
  createBall()
}

function createBall() {
  setRandomPosition();
  setRandomVelocity();
  radius = random(10, 20);
  createRandomColor(); 
}  
  

//TASK 2 + 3 - consolidate
function draw() {
  background(bg)
  fill(color(r,g,b))
  circle(x,y,radius)
  
  x += dx // x = x + dx
  y += dy // y = y + dy
  if (x - radius < 0 || x + radius > width) {
    dx *= -1;
  }
  
  if( y - radius < 0 || y + radius > width) {
    dy *= -1
  }   

//TASK 4a
r += random(10,15)
g += random(10,15)
b += random(10,15)
  
//TASK 4b
r = constrain(r, 0, 255);
g = constrain(g, 0, 255);
b = constrain(b, 0, 255);
  
// Task 4b - wrapping
r = r % 256;
  g = g % 256;
  b = b % 256;
}

// Task 5
function setRandomPosition( xMin = 0, yMin = 0, xMax = width, yMax = height) {
}

function setRandomPosition() {
  x = random(width)
  y = random(height)  
}

function setRandomVelocity() {
  dx = random(-1,1)
  dy = random(-1,1)  
}

function createRandomColor() {
  r = random(255)
  g = random(255)
  b = random(255)
}

function createRandomBGColor() {
  bg = color(random(255), random(255), random(255))
}  

// ----------------------
function keyPressed() {
  createRandomBGColor()
}

/** 
Hex Codes for the Official Avenues Colors 

#ffffff (white)
#000000 (black)
#B7B09C (ash)
#D3AE6F (ochre)
#3D68B2 (indigo)
#267355 (moss)
#44C3D4 (pristine blue)
#9796C9 (violet)
#CAC3BC (nimbus)
#C5D982 (pistachio)
#8A916A (olive)
#C17E60 (terracotta)
#F5CD64 (gold)
#C3411E (clay)
#0D9A48 (grass)
#273879 (navy)
*/
