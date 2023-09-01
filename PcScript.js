let isonserver = 0;

function loadScript(name, location = 'body', container = null, onLoadCallback = null) {
    const scriptElement = document.createElement("script");
if (isonserver === 1){
            scriptElement.src = `https://administrati0n.github.io/data-one/${name}.js`;
          } else if (isonserver === 0){
            scriptElement.src = `${name}.js`;
          }
    if (onLoadCallback) {
        scriptElement.onload = onLoadCallback;
    }
    if (container) {
        container.appendChild(scriptElement);
    } else {
        document[location].appendChild(scriptElement);
    }
}

function loadImage(name, element, property = 'backgroundImage', onLoadCallback = null) {
    const imageUrl = (isonserver === 1)
        ? `https://administrati0n.github.io/data-one/${name}`
        : `${name}`;
    element.style[property] = `url('${imageUrl}')`;

    if (onLoadCallback) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = onLoadCallback;
    }
}

var body = document.body;

// Загрузка скрипта Stuff1
loadScript('Stuff1', 'body', null, function() {
    // Код, который будет выполнен после загрузки скрипта Stuff1
});

// Загрузка скрипта loadscren
loadScript('loadscren', 'head');

// Загрузка скрипта fonts
loadScript('fonts', 'head');

// Загрузка скрипта iconLinks
loadScript('iconLinks', 'head');

// Загрузка скрипта Device
loadScript('Device', 'body');

// Загрузка скрипта data1
loadScript('data1', 'body');

// Загрузка скрипта player
loadScript('player', 'body');

// Загрузка скрипта consoledev
loadScript('consoledev', 'body');

// Загрузка скрипта Container0
loadScript('Container0', 'body');

// Загрузка скрипта Container1
loadScript('Container1', 'body');

// Загрузка скрипта ContainerForContent
loadScript('ContainerForContent', 'body');

// Загрузка скрипта Theme
loadScript('Theme', 'body');

// Загрузка скрипта WorkScripts
loadScript('WorkScripts', 'body');






