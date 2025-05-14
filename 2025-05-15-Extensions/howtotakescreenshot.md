## How to take a screenshot of the current Tab and work with it in p5.js 

You need to add those keys and values to the manifest.json (among version, icons, ..):
```js
    "background": {
        "scripts": ["background.js"]
    },

    "browser_action": {
        "default_icon": "icons/distort.png"
    },
    "permissions": [
        "<all_urls>",
        "tabs"
    ],
    "content_scripts": [{
        "matches": ["<all_urls>"],
         "js": ["p5.min.js", "sketch.js"]
       
    }],

```

Create and add all files, `background.js`, `p5.min.js`, `sketch.js`. 
The background Script is allowed to take a screenshot of the current tab. See documentation: https://developer.mozilla.org/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab
<br/>
So the file captures the screenshot and sends it to the content script which is in our case the sketch.js. <br/>
The whole structure looks a bit complicate because each action has to wait until the one before is performed. Normally we would not have to worry so much, but as we work with large pixel data here, we need to make sure, the data is actually here. This is the idea behind the kewords `async` and `await`, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

The basic structure looks like this, whereas we could try something (like capturing a screenshot, getting data, ...) and if this would fail we had a custom error message.<br/>

```js
let imageSend; 

browser.browserAction.onClicked.addListener(async () => {
    try{
         // load the screensot into the variable but wait until it came back
         // otherwise the variable would be empty
        imageSend = await browser.tabs.captureTab();
    }catch(error){
        onError(error);
    }
});

// Optional: custom error message
function onError(error) {
  console.error(`Error: ${error}`);
}
```

Now we need to send the data to the active Tab. Let's add these two blocks to the `try` block:

```js
        // 2. Ask for id of the active tab
        const [activeTab] = await browser.tabs.query({
            currentWindow: true,
            active: true
        });

        // 3. Send data to the active tab
        if (activeTab?.id) {
            await browser.tabs.sendMessage(activeTab.id, { data: imageSend });
        } else {
            console.warn("Kein aktiver Tab gefunden.");
        }

```

Back in sketch.js, we could use the screenshot and manipulate it. But we need to wait for the screenshot before creating the sketch! That is why we put it into an event listener that makes connection to the sending background script. 

```js
browser.runtime.onMessage.addListener((request) => {
    screenshot = request.data;
    //create a new p5 instance when the screenshot is received
    //this is necessary because the p5 instance needs to be created in the same context as the screenshot
    let myp5 = new p5(s);

});
```

We use p5.js in Instance Mode, see this Tutorial from Daniel Shiffman. https://www.youtube.com/watch?v=Su792jEauZg
The structure would look like this, and you would write sketch before every p5 function.

```js 
let s = function (sketch) {
    sketch.preload = function () {
    }
    sketch.setup = function () {
    }
    sketch.draw = function () {
    }
}
```
You can then treat the variable `screenshot` as you would treat an image that you loaded from your directory. This means you could write something like this, to place the screenshot on the sketch canvas.  

```js
let s = function (sketch) {
    let source;

    sketch.preload = function () {
        source = sketch.loadImage(screenshot);

    }
    sketch.setup = function () {
       
        let c = sketch.createCanvas(window.innerWidth, window.innerHeight);
        c.position(0, 0);
        c.style('z-index', 200);

        if (typeof source === 'object') {
            sketch.image(source, 0, 0, sketch.width , sketch.height );      
        }

    }

```
<a href="ScreenshotToP5.zip">Download Boilerplate</a>