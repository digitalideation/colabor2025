# JavaScript
JavaScript ist die dritte der drei Grund Webtechnologien: HTML, CSS und JS und JavaScript hat eine eigene Syntax. Ähnlich wie CSS kann auch JavaScript direkt im `.html` Dokument eingebunden oder als externes File dazugeladen werden.

### Funktionen von JavaScript 
JavaScript kann beispielsweise auf Ereignisse im Browser reagieren, die Darstellung der Seite verändern, eine CSS Animation starten, stoppen, Daten von einem Server laden, an einen Server schicken usw. <br/><br/>
In diesem Dokument findest du Beispiele zu Ereignissen und Veränderungen der Seite.

# JavaScript im HTML einbinden
Zwei Möglichkeiten (analog CSS): <br/>
Var 1. Füge diesen HTML Script Tag im HTML head oder im body ein:<br/>
```html
<script>
    alert('hallo seite geladen');
</script>
```
Var 2. Im script.js 
```
directory_name/
    - index.html
    - assets/
        - style.css
        - js/
            - scripts.js
```
```html
<script src="assets/js/script.js"></script>
```
Im script.js. Mit dem Befehl console.log() kannst du in der Konsole etwas ausgeben lassen, Bsp. einen Wert von einer Variable. 
```js
console.log('hallo von extern')
```
Im head oder bevor der Body schliesst, einbinden. Wichtig, wenn du auf Elemente im DOM zugreifst, dann musst du das JavaScript einbinden, bevor der Body schliesst, nicht im head. Das DOM ist dort noch nicht fertig geladen. 




## Ereignisse HTML Events 
Was ist ein HTML Event?
HTML bietet die Möglichkeit, durch Ereignisse (Events) Aktionen im Browser auszulösen, z. B. ein JavaScript zu starten, wenn ein Benutzer auf ein Element klickt. Im Beispiel unten wird auf das `onclick` Event JavaScript aufgerufen. <br/>
Weitere Events: <br/>
`onresize` Wenn man das Browserfenster vergrössert oder verkleinert<br/>
`onload` Wenn die ganze Page gelanden ist<br/>
Noch mehr:
https://www.w3schools.com/tags/ref_eventattributes.asp

```html
<button class="specialbutton" onclick="alert('Hallo')">Click mich!</button>
```
Innerhalb der Hochkommas von `onclick=""` wird JavaScript erwartet.


## DOM (Document Object Model)
DOM, was ist das? <br/>
Eine Schnittstelle, über die JavaScript alle Elemente eines HTML Dokuments verändern kann. Das DOM ist eine Abbildung des ganzen HTML Baums mit allen Knoten für JS. Jeder sogenannten 'Knoten' und jedes Attribut kann über JS angesprochen und verändert werden. Anders gesagt, eine `.html` Seite liefert JavaScript eine Abbildung ihrer Elemente, Stile und Zustands der Elemente. JavaScript kann diese Informationen lesen, aber über die Schnittstelle auch Elemente verändern, hinzufügen, etc. Der Zugriff geschieht über die `document` Variable.<br/>
https://www.w3schools.com/js/js_htmldom.asp<br/><br/>
Noch etwas tiefer: https://eloquentjavascript.net/14_dom.html<br/>

<img src="https://www.w3schools.com/js/pic_htmltree.gif" width="500"/><br/>
Quelle: https://www.w3schools.com/js/js_htmldom.asp<br/>


### Ein Beispiel
Mit JavaScript Attribute eines Elements verändern:
Erstelle im HTML ein Element mit der ID #element und style es über CSS. Positioniere es absolut.
```html
<div id="element"></div>
```
```css
position: absolute;
top: 200px;
left: 0px;
```

```js
let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++;
    document.getElementById("element").style.left = n + "px";
}
```
Du greifst nun über die DOM Schnittstelle auf das Attribut left zu.<br/>
W3C, Zugriff auf Style Properties: https://www.w3schools.com/jsref/prop_style_aligncontent.asp<br/><br/>

## Ein zweites Beispiel
Elemente mit JavaScript erzeugen:<br/>
```html
<button class="specialbutton" onclick="neuesElement()">Erzeuge Element!</button>
```
```js
function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    document.body.appendChild(div);
}
```
W3C Examples hier: https://www.w3schools.com/js/js_htmldom_nodes.asp <br/>
Beispiel ergänzt, random positionierung:
```js
function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}
```


