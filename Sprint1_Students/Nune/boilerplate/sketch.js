let columns = 8;
let rows = 6;
let spaceX = 45;
let spaceY = 45;
let edgeX = 40;
let edgeY = 36;
let repetitions = 10;
let maxDistort = 30;
let palette = ['#16161B', '#D37139', '#C2042E', '#3C60AA', '#9A3E7D'];

function setup() {
  createCanvas(600, 400);
  noFill();
  strokeWeight(1);
}

function draw() {
  background(240);
  
  
  let hoveredColumn = floor((mouseX - 50) / (spaceX + 4));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let startX = 50 + c * (spaceX + 4);
      let startY = r * spaceY + 50;

      let distance = abs(c - hoveredColumn);
      let distort = 0;

      
      if (distance <= 5) {
        distort = map(distance, 0, 5, maxDistort, 0);
      }

      for (let i = 0; i < repetitions; i++) {
        let x1 = startX + random(-distort, distort);
        let y1 = startY + random(-distort, distort);

        let x2 = startX + edgeX + random(-distort, distort);
        let y2 = startY + random(-distort, distort);

        let x3 = startX + edgeX + random(-distort, distort);
        let y3 = startY + edgeY + random(-distort, distort);

        let x4 = startX + random(-distort, distort);
        let y4 = startY + edgeY + random(-distort, distort);

        let chosenColor = random(palette);
        stroke(chosenColor);
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
      }
    }
  }
}