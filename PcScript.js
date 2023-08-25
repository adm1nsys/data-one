let isonserver = 1; 
let BASE_URL = "https://administrati0n.github.io/data-one/";
function isonservercheck() {
if(isonserver === 1){
let BASE_URL = "https://administrati0n.github.io/data-one/";
}else if (isonserver === 0) {
let BASE_URL = "";
}
}
isonservercheck()
// Libreries
const lib = document.createElement("script");
lib.src = BASE_URL + "lib.js";
document.head.appendChild(lib);

// Variables
const Stuff1 = document.createElement("script");
Stuff1.src = BASE_URL + "Stuff1.js";
Stuff1.onload = function () {
//
};
document.body.appendChild(Stuff1);


// Load Screen
const loadscren = document.createElement("script");
loadscren.src = BASE_URL + "loadscren.js";
document.head.appendChild(loadscren);

// Fonts
const fonts = document.createElement("script");
fonts.src = BASE_URL + "fonts.js";
document.head.appendChild(fonts);

// iconLinks
const iconLinks1 = document.createElement("script");
iconLinks1.src = BASE_URL + "iconLinks.js";
document.head.appendChild(iconLinks1);

// Device
const Device = document.createElement("script");
Device.src = BASE_URL + "Device.js";
document.body.appendChild(Device);

// data1
const data1 = document.createElement("script");
data1.src = BASE_URL + "data1.js";
document.body.appendChild(data1);

// player
const player = document.createElement("script");
player.src = BASE_URL + "player.js";
document.body.appendChild(player);

// Content
const Content = document.createElement("script");
Content.src = BASE_URL + "content.js";
document.body.appendChild(Content);



// Theme
const Theme = document.createElement("script");
Theme.src = BASE_URL + "Theme.js";
document.body.appendChild(Theme);

// WorkScripts
var body = document.body;
const WorkScripts = document.createElement("script");
WorkScripts.src = BASE_URL + "WorkScripts.js";
body.insertAdjacentElement("afterend", WorkScripts);


  // setTimeout(function() {
// document.body.removeChild(player);

// }, 5000); 



