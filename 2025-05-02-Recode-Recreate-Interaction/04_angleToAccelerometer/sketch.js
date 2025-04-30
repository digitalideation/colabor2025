let xx = 0;
let yy = 0;

let bigDiameter = 400;
let smallDiameter = 100;



function setup() {
  createCanvas(windowWidth, windowHeight);

  diagonale=round(sqrt(pow(width,2)+pow(height, 2)));

 

}

function draw() {
  background(0);
  let d=bigDiameter/2-smallDiameter/2;
  if (useAccelerometer) {
    // Use accelerometer data, px and py depend on the rotation of the device
    // px and py are between 0 and 100
   
    xx = map(px, 0, 100, -1*d, d, true);
    yy = map(py, 0, 100, -1*d, d, true);
  } else {
    // Use mouse position data
    
    xx=map(mouseX, 0, width, -1*d, d, true);
    yy=map(mouseY, 0, height, -1*d, d, true);
  }

  push();
  translate(width/2, height/2);
  fill(255);
  ellipse(0, 0, bigDiameter, bigDiameter);
  translate(xx,yy);
  fill(0);
  ellipse(0, 0, smallDiameter, smallDiameter);

  pop();
}

