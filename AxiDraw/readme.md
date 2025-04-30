# AxiDraw

## SVG Export p5.js 
Library and Examples https://github.com/zenozeng/p5.js-svg 
```html
<!--
1.
need to have p5.svg.js Library in index.html
-->
<script src="https://unpkg.com/p5.js-svg@1.6.0"></script>
```

```js

function setup() {
  /* ~~~~~~~~~~~~ export SVG */
  //2. createCanvas mit dem Parameter SVG
  createCanvas(windowWidth, windowHeight, SVG);
  
}

function draw() {
    //3. call clear in draw in order to prevent creating too many shaper
   clear();

}

///4. save it

function keyTyped() {
  if (key == 's') {
    let d=new Date();
    /* ~~~~~~~~~~~~ export SVG */
    save(d+".svg")
    noLoop();
  }
  
}

```


* <a href="AxiDraw_Guide_v571.pdf">AxiDraw Guide </a>
* <a href="https://wiki.evilmadscientist.com/Axidraw_Software_Installation">Software (AxiDraw and Inkscape) </a>

## Live Drawing
* p5.js AxiDraw Library https://github.com/jmpinit/p5.axidraw 