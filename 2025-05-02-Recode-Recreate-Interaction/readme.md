# RE-Code, RE-Create, Interactions 

## Exploring Interaction 
* Yehwan Song https://yhsong.com/ 
* Sougwen Chung https://sougwen.com/



## Sensordata, Interaction 
* p5.js https://p5js.org/  (Mouse, Slider, Audio, Camera, ...)
* ml5.js https://docs.ml5js.org/#/ 
* ZIG SIM PRO smartphone as sensor https://sites.hslu.ch/werkstatt/your-smartphone-is-a-sensorpack/



## Code Examples 
* <a href="https://github.com/digitalideation/colabor2025/blob/main/2025-05-02-Recode-Recreate-Interaction/Download.zip">Download Code Package </a>
<br/>
The easiest way to control something are the sliders that p5.js offers. More examples in the code package above.

```js
let sizeSlider;// Declare the slider variable
function setup() {
  createCanvas(windowWidth, windowHeight);
  //create the slider and position it
  sizeSlider = createSlider(10, width/2, 100);
  sizeSlider.position(20, 20);
}

function draw() {
  background(255);
  fill(0);
  //get the value from the slider and use it to set the size of the ellipse
  let size = sizeSlider.value();
  ellipse(width/2, height/2, size, size);
}


```

## AxiDraw 
