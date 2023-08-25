const shtoraT = document.createElement("div");
shtoraT.style.display = "flex";
shtoraT.style.width = "100%";
shtoraT.style.height = "50%";
shtoraT.style.position = "fixed";
shtoraT.style.left = "0px";
shtoraT.style.top = "0px";
shtoraT.style.background = "black";
shtoraT.style.zIndex = "99999999999999999";
shtoraT.style.transition = "4s";
document.body.appendChild(shtoraT);

const shtoraB = document.createElement("div");
shtoraB.style.display = "flex";
shtoraB.style.width = "100%";
shtoraB.style.height = "50%";
shtoraB.style.position = "fixed";
shtoraB.style.right = "0px";
shtoraB.style.bottom = "0px";
shtoraB.style.background = "black";
shtoraB.style.zIndex = "99999999999999999";
shtoraB.style.transition = "4s";
document.body.appendChild(shtoraB);

const shtorac111 = document.createElement("div");
shtorac111.style.display = "flex";
shtorac111.style.width = "100%";
shtorac111.style.height = "100%";
shtorac111.style.opacity = "1";
shtorac111.style.left = "0px";
shtorac111.style.right = "0px";
shtorac111.style.position = "absolute";
shtorac111.style.top = "0px";
shtorac111.style.bottom = "0px";
shtorac111.style.background = "none";
shtorac111.style.zIndex = "999999999999999999";
shtorac111.style.transition = "0.4s";
shtorac111.style.justifyContent = "center";
shtorac111.style.justifyItems = "center";
shtorac111.style.alignItems = "center";
shtorac111.style.alignContent = "center";
shtorac111.style.overflow = "hidden";
document.body.appendChild(shtorac111);

function animatels01() {
    if(linec1111.style.left === "-100%"){
        linec1111.style.transition = "1s";
        setTimeout(function() {
            linec1111.style.left = "100%";
        }, 100); 
    } else if(linec1111.style.left === "100%"){
        linec1111.style.transition = "0s";
        setTimeout(function() {
            linec1111.style.left = "-100%";
        }, 100); 
    }
}




const linec111 = document.createElement("div");
linec111.style.display = "flex";
linec111.style.position = "relative";
linec111.style.width = "100%";
linec111.style.height = "5px";
linec111.style.overflow = "hidden";
linec111.style.background = "rgb(61, 61, 61)";
linec111.style.transition = "1s";

const linec1111 = document.createElement("div");
linec1111.style.display = "flex";
linec1111.style.position = "absolute";
linec1111.style.top = "0px";
linec1111.style.left = "-100%";
linec1111.style.width = "50%";
linec1111.style.height = "100%";
linec1111.style.background = "white";
linec1111.style.transition = "1s";


if(lscreen === 1){
document.body.appendChild(shtoraT);

document.body.appendChild(shtoraB);

document.body.appendChild(shtorac111);

shtorac111.appendChild(linec111);
linec111.appendChild(linec1111);
setInterval(animatels01, 1100); // 1100ms — это примерное время, через которое будет происходить переключение. Это может быть любое значение в зависимости от того, как вы хотите, чтобы анимация происходила.

} else if (lscreen === 0){
//     //
    document.body.removeChild(shtoraT);

document.body.removeChild(shtoraB);

document.body.removeChild(shtorac111);
}

function lscrenclose() {

linec111.style.height = "0px";

  setTimeout(function() {
shtorac111.style.opacity = "0";
  setTimeout(function() {
shtoraT.style.top = "-200%";
}, 500); 

  setTimeout(function() {
shtoraB.style.bottom = "-200%";
}, 550); 

  setTimeout(function() {
document.body.removeChild(shtoraT);

document.body.removeChild(shtoraB);

document.body.removeChild(shtorac111);

}, 1600); 
}, 1000); 




}
