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

// Lib
loadScript('lib', 'head');

// Variables
loadScript('Stuff1', 'body', null, function() {
    // Ваш код, который будет выполняться после загрузки скрипта Stuff1
});

// Load Screen
loadScript('loadscren', 'head');

// Fonts
loadScript('fonts', 'head');

// iconLinks
loadScript('iconLinks', 'head');

// Device
loadScript('Device');

// data1
loadScript('data1');

// player
loadScript('player');

// Content
loadScript('Content');

// Theme
loadScript('Theme');

// WorkScripts
loadScript('WorkScripts');



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



