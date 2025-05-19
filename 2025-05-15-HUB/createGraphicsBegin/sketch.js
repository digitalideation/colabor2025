
/**
 * Workshop Kinetic Typography with p5.js
 * © HSLU, 2025, Hanna Zuellig
 * Example inspired by: https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/
 * and https://openprocessing.org/sketch/2351903
 */

let font;
let pg;
let scaleFactor = 1;
let tileW;
let tileH;


let params = {
  text: "Corruption",
  size: 240,
  tilesX: 15,
  tilesY: 15,
  triggerStop: startStop,
  triggerAction: exportPNG
};

let isLooping = true;

function preload() {
  font = loadFont("fonts/BiancoSansNewExtraBold.otf");
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth / scaleFactor, windowHeight / scaleFactor);

  // Setup GUI
  const gui = new dat.GUI();
  gui.add(params, 'text').name('Text Input').onFinishChange(init);
  gui.add(params, 'size', 100, 500).name('Text Size').onFinishChange(init);
  gui.add(params, 'tilesX', 3, 30).name('Anzahl Spalten');
  gui.add(params, 'tilesY', 3, 30).name('Anzahl Zeilen');
  gui.add(params, 'triggerStop').name("Start/Stop"); // ✅ This creates a button
  gui.add(params, 'triggerAction').name("Export Image"); // ✅ This creates a button

  init();

  //frameRate(1)

  image(pg, 0, 0, pg.width * scaleFactor, pg.height * scaleFactor);

  //angleMode(DEGREES);
}

function draw() {
  //background(0);

  let spalte = int(width / params.tilesX);
  let zeile = int(height/params.tilesY);

  for (let i = 0; i < params.tilesX; i++) {
    for (let j = 0; j < params.tilesY; j++) {
      //let randomOffsetX = random(-10, 10);
      //let randomOffsetY= random(-10, 10);

     let waveX = int(sin(frameCount * 0.05 + (i * j) * 0.2) *spalte*0.2);
     let waveY = int(sin(frameCount * 0.02 + (j)* 0.1)*zeile*0.1);

      copy(pg, i * spalte, //xpos original
        j*zeile, //ypos original
        spalte, //breite kachel
        zeile, //hoehe kachel
        i * spalte + waveX, //xpos destination
        j*zeile + waveY, //ypos destination
        spalte, //breite kachel destinatoin
        zeile); //hoehe kachel destination
    }
  }


  //copy(mouseX, mouseY, 100, 100, mouseX+10, mouseY+10, 100, 100);

}




function init() {
  // PGraphics

  pg.blendMode(SCREEN)
  pg.background(0);
  pg.push();
  pg.translate(pg.width / 2, pg.height / 2);
  pg.textAlign(CENTER, CENTER);

  pg.fill(255, 0, 0, 200);
  pg.textFont(font);
  pg.textSize(params.size / scaleFactor);
  pg.text(params.text, 0, 0);

  pg.fill(0, 255, 0, 200);
  pg.textFont(font);
  pg.textSize(params.size / scaleFactor - 2);
  pg.text(params.text, 0, 0);

  pg.fill(0, 0, 255, 200);
  pg.textFont(font);
  pg.textSize(params.size / scaleFactor + 2);
  pg.text(params.text, 0, 0);

  pg.pop();

  background(0);
  image(pg, 0, 0, pg.width * scaleFactor, pg.height * scaleFactor);

}

function startStop() {
  if (isLooping) {
    noLoop();
    isLooping = false;
  } else {
    loop();
    isLooping = true;
  }
}


function exportPNG() {
  let d = new Date();
  /* ~~~~~~~~~~~~ export PNG */
  save(d + ".png")
  noLoop();
}