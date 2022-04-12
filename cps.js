let clicked = 0;
function onpush(){
console.log("Clicked");
a.innerHTML = clicked;
clicked = clicked + 1;
}

let a = document.getElementById("counter");
