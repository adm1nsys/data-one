// Libreries
function loadScript(name, location = 'body', container = null, onLoadCallback = null) {
    const scriptElement = document.createElement("script");
    
    // // fetch(`https://administrati0n.github.io/data-one/${name}.js`)
    // fetch(`${name}.js`)
    //     .then(response => {
    //         if (!response.ok) { throw Error(response.statusText); }
            scriptElement.src = `https://administrati0n.github.io/data-one/${name}.js`;
        // })
        // .catch(error => {
        //     scriptElement.src = `https://administrati0n.github.io/data-one/${name}.js`;
        // });

    if (onLoadCallback) {
        scriptElement.onload = onLoadCallback;
    }

    if (container) {
  // setTimeout(function() {

        container.appendChild(scriptElement);
// }, 1600); 

    } else {
        document[location].appendChild(scriptElement);
    }
}



// function loadScript(name, location = 'body', container = null, onLoadCallback = null) {
//     const scriptElement = document.createElement("script");
    
//     scriptElement.src = `${name}.js`;
    
//     scriptElement.onerror = function() {
//         scriptElement.src = `https://administrati0n.github.io/data-one/${name}.js`;
//     };

//     if (onLoadCallback) {
//         scriptElement.onload = onLoadCallback;
//     }

//     if (container) {
//         container.appendChild(scriptElement);
//     } else {
//         document[location].appendChild(scriptElement);
//     }
// }
var body = document.body;

// // Lib
// loadScript('lib', 'head');

// // Variables
// loadScript('Stuff1', 'body', null, function() {
//     // Ваш код, который будет выполняться после загрузки скрипта Stuff1
// });

// // Load Screen
// loadScript('loadscren', 'head');

// // Fonts
// loadScript('fonts', 'head');

// // iconLinks
// loadScript('iconLinks', 'head');

// // Device
// loadScript('Device');

// // data1
// loadScript('data1');

// // player
// loadScript('player');

// // Content
// loadScript('Content');

// // Theme
// loadScript('Theme');

// // WorkScripts
// loadScript('WorkScripts');


// Variables
const Stuff1 = document.createElement("script");
Stuff1.src = "https://administrati0n.github.io/data-one/Stuff1.js";
Stuff1.onload = function () {
//
};
document.body.appendChild(Stuff1);


// Load Screen
const loadscren = document.createElement("script");
loadscren.src = "https://administrati0n.github.io/data-one/loadscren.js";
document.head.appendChild(loadscren);

// Fonts
const fonts = document.createElement("script");
fonts.src = "https://administrati0n.github.io/data-one/fonts.js";
document.head.appendChild(fonts);

// iconLinks
const iconLinks1 = document.createElement("script");
iconLinks1.src = "https://administrati0n.github.io/data-one/iconLinks.js";
document.head.appendChild(iconLinks1);

// Device
const Device = document.createElement("script");
Device.src = "https://administrati0n.github.io/data-one/Device.js";
document.body.appendChild(Device);

// data1
const data1 = document.createElement("script");
data1.src = "https://administrati0n.github.io/data-one/data1.js";
document.body.appendChild(data1);

// player
const player = document.createElement("script");
player.src = "https://administrati0n.github.io/data-one/player.js";
document.body.appendChild(player);

// Content
const Content = document.createElement("script");
Content.src = "https://administrati0n.github.io/data-one/Content.js";
document.body.appendChild(Content);



// Theme
const Theme = document.createElement("script");
Theme.src = "https://administrati0n.github.io/data-one/Theme.js";
document.body.appendChild(Theme);

// WorkScripts
var body = document.body;
const WorkScripts = document.createElement("script");
WorkScripts.src = "https://administrati0n.github.io/data-one/WorkScripts.js";
body.insertAdjacentElement("afterend", WorkScripts);
Stuff1.onload = function () {
//
};



  // setTimeout(function() {
// document.body.removeChild(lib);
// document.body.removeChild(Stuff1);
// document.body.removeChild(loadscren);
// document.body.removeChild(fonts);
// document.body.removeChild(iconLinks1);
// document.body.removeChild(Device);
// document.body.removeChild(data1);
// document.body.removeChild(player);
// document.body.removeChild(Content);
// document.body.removeChild(Theme);
// document.body.removeChild(WorkScripts);

// }, 5000); 



