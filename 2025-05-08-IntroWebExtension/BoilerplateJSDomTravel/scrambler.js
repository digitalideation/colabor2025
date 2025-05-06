/*---------------------*/
/*---- Insert CSS -----*/
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = browser.runtime.getURL("scrambler.css");
link.media = 'all';
head.appendChild(link);

/*---------------------*/
/*----Add event listener, click event on all elements, 
travel through dom -----*/

addClickListenersToAllNodes(document.body);

function addClickListenersToAllNodes(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    node.addEventListener('click', function (e) {

      e.preventDefault(); //prevent default actions -- makes site dysfunctional, links do not work
      //console.log('Node clicked:', node.nodeType, node.nodeName);

      if (node.nodeName == "IMG") { //node name uppercase
        node.classList.add("imgclass");

        /*---Option, replace Image ----*/
        replaceImage(node, node.getAttribute("alt"));

      } else if (node.nodeName == "H1") {
        node.classList.add("h1class");

       

      } else if (node.nodeName == "A") {
        node.classList.add("aclass");

        /*---Option, duplicate Node ----*/
        duplicateNode(node);

      } else {
        node.classList.add("border"); //add Class
      }

     
    });

    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      addClickListenersToAllNodes(childNode);
    }
  }
}

/*---------------------*/
/*
* replace img with some random img from unsplash
* search based on alt text, if none is provided, search for 'cat'
* @el img node
* @stichwort alt text
*/
function replaceImage(el, stichwort) {
  if (stichwort == "") {
    stichwort = "cat";
  }
  let URL = "https://source.unsplash.com/random/?" + stichwort;
  el.setAttribute("src", URL);


}

function duplicateNode(el){
  
    let s = el.getBoundingClientRect();
    console.log(s)
    let newEl = document.createElement("span");
    newEl.className = "duplicateNode";
    newEl.innerHTML = el.textContent;
    newEl.style.width=s.width+"px";
    newEl.style.height=s.height+"px";
    el.parentElement.appendChild(newEl);
    el.parentElement.classList.add('relative');
    


}