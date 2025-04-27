// Horizontale und vertikale Distand der Formen
let distX = 50;
let distY = 50;

// Zufällger Versatz der Formen in der x- und Y-Achse
let randX = 0;
let randY = 0;

let anzahlSpalte = 10;

function setup() {
  createCanvas(660, 800);
  background(255);
}

function draw() {
  noStroke();
  fill(154, 127, 150, 200); // Farbe der Formen mit Transparenz
  blendMode(MULTIPLY); // Überblendungsmodus

  //erste Zeile
  zeichneZeile(2);

  blendMode(REMOVE);
  noLoop();
}

function zeichneZeile(zeileY) {
  for (let x = 1; x < anzahlSpalte; x++) {
    push();
    randX = random(-12, 12);
    randY = random(-12, 12);
    translate(x * distX + randX, zeileY * distY + randY);

    
    rect(0, 0, 65, 72);
    pop();
  }
    
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}

function mousePressed() {
  // zeichnet ein weisses Rechteck über alles
  fill(255);
  rect(0, 0, width, height);
  // startet die Funktion draw() erneut
  loop();
}
