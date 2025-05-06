

/*---------------------*/
/*----Add event listener, click event on all elements, 
travel through dom -----*/

addClickListenersToAllNodes(document.body);

function addClickListenersToAllNodes(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    node.addEventListener('click', function (e) {

      e.preventDefault(); //prevent default actions -- makes site dysfunctional, links do not work
      //console.log('Node clicked:', node.nodeType, node.nodeName);

      

     
    });

    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      addClickListenersToAllNodes(childNode);
    }
  }
}



function duplicateNode(el){
  
    let s = el.getBoundingClientRect();
    //console.log(s)
    let newEl = document.createElement("span");
    newEl.className = "duplicateNode";
    newEl.innerHTML = el.textContent;
    newEl.style.width=s.width+"px";
    newEl.style.height=s.height+"px";
    el.parentElement.appendChild(newEl);
    el.parentElement.classList.add('relative');
    


}