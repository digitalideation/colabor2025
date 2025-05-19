/**
 * Workshop Kinetic Typography with p5.js
 * © HSLU, 2025, Hanna Zuellig
 * Example textToPoints
 */


let pts;
let font;

let params = {
    text: "Momentum",
    size: 240,
    sampleFactor: 0.25,
    circlesize: 2,
    triggerAction: exportSVG
};

function preload() {
    font = loadFont('fonts/307DC5_0_0.ttf');

}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, SVG);

    // Setup GUI
    const gui = new dat.GUI();
    gui.add(params, 'text').name('Text Input').onFinishChange(init);
    gui.add(params, 'size', 100, 500).name('Text Size').onFinishChange(init);
    gui.add(params, 'sampleFactor', 0.1, 0.5).name('Sample Factor').onFinishChange(init);
    gui.add(params, 'circlesize', 2, 10).name('Circle Size').onFinishChange(init);
    gui.add(params, 'triggerAction').name("Export SVG"); // ✅ This creates a button

    init();

    frameRate(6);

    angleMode(DEGREES);
}

function draw() {
    background(0);

    
    translate(20, 240);
    fill(255);
    noStroke();
    randomSeed(5);
    noFill();
    stroke(255, 100);
    for(let i=0;i<pts.length;i++){
        let pt=pts[i];

        let skaliere = sin(i)+1.1;//minimum 0.1, maximum 2.1
        //let randomOffsetX = random(-5,5);
        //let randomOffsetY = random(-5,5);
        //ellipse(pt.x, pt.y, params.circlesize*skaliere , params.circlesize*skaliere );
        line(pt.x, pt.y, pt.x, pt.y+100);
    }

    //ellipse(200, 200, params.circlesize, params.circlesize);
    
    //draw the points im some way

    //@todo Do something with the points 
    // create some randomness 
    // add some noise to the points
    // add some sinus to make the circle grow and shrink along the path 
    // own ideas!

}

function init() {
    // textToPoints() returns an array of points

    pts = font.textToPoints(params.text, 0, 0, params.size, 
        { sampleFactor:  params.sampleFactor }
    );
   // console.log(pts);
}

function exportSVG(){
    let d=new Date();
    /* ~~~~~~~~~~~~ export SVG */
    save(d+".svg")
    noLoop();
}
