let n=0;
function move(){
    n=n+3; 
    //n++;
    let element = document.getElementById("element");

    element.style.backgroundColor = "blue";
    element.style.left=n+"px";
}

let btn = document.getElementById("button");
btn.addEventListener("click", move);