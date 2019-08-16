let color1 = document.querySelector("#first-color");
let color2 = document.querySelector("#second-color");
let colorInfo =document.querySelector("#color-field")
let body = document.querySelector("body");

function setBackgroundColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function showColorInfo(){
    colorInfo.textContent = body.style.background;
}

color1.addEventListener("input", ()=>{
    setBackgroundColor();
    showColorInfo();
})

color2.addEventListener("input", ()=>{
    setBackgroundColor();
    showColorInfo();
})

color1.value = "#ff0000";
color2.value = "#00ff00";
setBackgroundColor();
showColorInfo();