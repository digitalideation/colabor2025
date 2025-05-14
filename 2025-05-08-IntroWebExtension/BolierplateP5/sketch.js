let s = function (sketch){
    sketch.setup = function(){
        //document.body.style.userSelect="none";
        let h = document.body.clientHeight;

        let page_height = document.body.getBoundingClientRect();
        console.log(page_height);
        
        let c = sketch.createCanvas(sketch.windowWidth, page_height.height);
        sketch.pixelDensity(1);
        c.position(0, 0);
        const canvas = c.canvas;
        console.log(canvas);
        canvas.style.position = "fixed"
        canvas.style.pointerEvents = "none"
        
        
    }

    sketch.draw = function(){
        // use this to have transparent background
        // sketch.clear();
        sketch.background(127)
        sketch.fill(255,0,0);
        sketch.noStroke();
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 20,20)
    }
}

let myp5 = new p5(s);


