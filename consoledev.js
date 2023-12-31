  var consoleDiv = document.createElement('div');
  consoleDiv.style.display = 'none';
  consoleDiv.style.width = '1000px';
  consoleDiv.style.height = '500px';
  consoleDiv.style.border = '1px solid #ccc';
  consoleDiv.style.position = 'fixed';
  consoleDiv.style.zIndex = '9999';
  consoleDiv.style.background = 'black';
  consoleDiv.style.borderRadius = '10px';
  consoleDiv.style.overflow = 'hidden';
  consoleDiv.style.top = '0%';
  consoleDiv.style.left = '0%';
  consoleDiv.style.transform = 'translate(50%, 50%)';
  
  var dragHandle = document.createElement('div');
  dragHandle.style.width = '100%';
  dragHandle.style.height = '20px';
  dragHandle.style.background = '#ccc';
  dragHandle.style.cursor = 'move';
  // dragHandle.style.borderRadius = '8px 8px 0px 0px';
  
  var input = document.createElement('input');
  input.style.width = '50%';
  input.style.height = '17px';
  input.style.background = 'black';
  input.style.border = '1px solid #ccc';
  input.style.borderLeft = 'none';
  input.style.borderTop = 'none';
  input.style.color = 'white';
  
  var conscont = document.createElement('div');
  conscont.style.width = '100%';
  conscont.style.marginBottom = '0px';
  // conscont.style.height = '460px';
  conscont.style.overflow = 'auto';
  conscont.style.display = 'flex';

  var output = document.createElement('div');
  output.style.width = '100%';
  output.style.background = 'black';
  output.style.overflow = 'auto';
  // output.style.background = "url('https://www.bleepstatic.com/content/hl-images/2021/08/25/Apple-glitch.jpg')";
  output.style.backgroundPosition = "right";
  output.style.backgroundSize = "cover";
  output.style.fontFamily = 'monospace';

conscont.style.height = consoleDiv.offsetHeight - dragHandle.offsetHeight - input.offsetHeight + 'px';
// console.log(consoleDiv.offsetHeight - dragHandle.offsetHeight - input.offsetHeight + 'px');
var conselement = document.createElement('div');
conselement.style.width = '900px';
conselement.style.background = 'black';
conselement.style.height = '460px';
conselement.style.marginTop = '0px';
conselement.style.marginBottom = '0px';
conselement.style.borderLeft = '1px solid #ccc';
conselement.style.overflow = 'auto';
conselement.style.fontFamily = 'monospace';
// conselement.contentEditable = true;

  var selectedind0 = document.createElement('div');
selectedind0.style.position = "absolute";
selectedind0.style.width = "100%";
selectedind0.style.height = "100%";
selectedind0.style.left = "0px";
selectedind0.style.right = "0px";
selectedind0.style.top = "0px";
selectedind0.style.bottom = "0px";
selectedind0.style.background = "rgba(60, 0, 0, 0.47)";
selectedind0.style.mixBlendMode = "difference";
selectedind0.style.zIndex = "9999999999999999999999999";

var conselement1 = document.createElement('div');
conselement1.style.width = '100%';
conselement1.style.height = '100%';
conselement1.style.marginTop = '0px';
conselement1.style.marginBottom = '0px';
conselement1.style.borderLeft = '1px solid #ccc';
conselement1.style.overflow = 'hidden';
conselement1.style.fontFamily = Font1;



// Создание контейнера для 2 окна (информация о стилях и объекте)
var infoContainer1 = document.createElement('div');
infoContainer1.style.width = '90%';
infoContainer1.style.height = '460px';
infoContainer1.style.marginTop = '0px';
infoContainer1.style.marginBottom = '0px';
infoContainer1.style.borderLeft = '1px solid #ccc';
infoContainer1.style.overflow = 'auto';
infoContainer1.style.fontFamily = 'monospace';

// var stylesTitle0 = document.createElement('h2');
// stylesTitle0.textContent = 'Styles:1';
// infoContainer1.appendChild(stylesTitle0);

// Создание кнопки для активации/деактивации инструмента "Start element selection"
var startSelectionButton = document.createElement('button');
startSelectionButton.textContent = 'Start element selection';
startSelectionButton.style.position = 'absolute';
startSelectionButton.style.right = '0px';
startSelectionButton.style.top = '22px';
startSelectionButton.addEventListener('click', toggleSelection);

var isElementSelected = false; // Переменная для отслеживания выбранного элемента
var selectionEnabled = false; // Флаг для отслеживания состояния инструмента

// Функция для включения/выключения инструмента
function toggleSelection() {
  if (selectionEnabled) {
    disableSelection();
  } else {
    enableSelection();
  }
}

// Функция для включения инструмента
function enableSelection() {
  selectionEnabled = true;
  startSelectionButton.textContent = 'Stop element selection'; // Изменили текст кнопки
  document.body.addEventListener('click', handleMouseClick);
  console.log('Selection enabled');
}

// Функция для выключения инструмента
function disableSelection() {
  selectionEnabled = false;
  startSelectionButton.textContent = 'Start element selection'; // Изменили текст кнопки

  // Снимаем выделение с текущего выделенного элемента, если такой есть
  if (isElementSelected) {
    // selectedElement.style.border = '';
selectedElement.removeChild(selectedind0);

    isElementSelected = true; // Исправили ошибку в коде тут должно быть true
  }

  document.body.removeEventListener('click', handleMouseClick);
  console.log('Selection disabled');
}

// Функция для обработки события click
function handleMouseClick(event) {
  var x = event.clientX;
  var y = event.clientY;
  var element = document.elementFromPoint(x, y);

  if (element === startSelectionButton) {
    return;
  }

  // Снимаем выделение с предыдущего выделенного элемента
  if (isElementSelected) {
    selectedElement.style.border = '';
  }

  // element.style.border = '2px solid red';

  selectedElement = element; // Перемещаем инициализацию selectedElement перед вызовом updateInfo
  element.appendChild(selectedind0);
  isElementSelected = true;
  console.log('Element selected:', element);

  updateInfo(element); // Вызываем updateInfo после инициализации selectedElement
}


function updateInfo(element) {
  // Создаем новый контейнер для стилей при каждом вызове функции
  var infoContainer1 = document.createElement('div');
  infoContainer1.id = 'info-container-1'; // Устанавливаем ID, чтобы затем удалить старый контейнер
  infoContainer1.style.width = '100%';
  infoContainer1.style.height = '460px';
  infoContainer1.style.marginTop = '0px';
  infoContainer1.style.marginBottom = '0px';
  infoContainer1.style.borderLeft = '1px solid #ccc';
  infoContainer1.style.overflow = 'auto';
  infoContainer1.style.fontFamily = 'monospace';

  var stylesTitle = document.createElement('h2');
  stylesTitle.textContent = 'Styles:';
  infoContainer1.appendChild(stylesTitle);

  var stylesList = document.createElement('ol');

  for (var i = 0; i < element.style.length; i++) {
    var styleName = element.style[i];
    var styleValue = element.style.getPropertyValue(styleName);

    var styleItem = document.createElement('li');
    var propertyNameSpan = document.createElement('span');
    propertyNameSpan.style.color = "purple";
    propertyNameSpan.contentEditable = true;
    propertyNameSpan.innerText = styleName;
    propertyNameSpan.classList.add('property-name');

    var propertyValueSpan = document.createElement('span');
    propertyValueSpan.contentEditable = true;
    propertyValueSpan.innerText = styleValue;
    propertyValueSpan.classList.add('property-value');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.addEventListener('change', handleCheckboxChange);
    propertyValueSpan.addEventListener('input', handlePropertyValueChange);

    var label = document.createElement('label');
    label.appendChild(propertyNameSpan);
    label.appendChild(document.createTextNode(': '));
    label.appendChild(propertyValueSpan);
    label.appendChild(document.createTextNode('; '));
    propertyValueSpan.setAttribute('data-style-name', styleName);

    styleItem.classList.add('style-item');

    styleItem.appendChild(checkbox);
    styleItem.appendChild(label);

    stylesList.appendChild(styleItem);
  }

  infoContainer1.appendChild(stylesTitle);
  infoContainer1.appendChild(stylesList);

  // Удаляем старый контейнер с информацией о стилях
  var oldInfoContainer1 = document.getElementById('info-container-1');
  if (oldInfoContainer1) {
    oldInfoContainer1.remove();
  }
  function handlePropertyValueChange(event) {
    var propertyValueSpan = event.target;
    var propertyName = propertyValueSpan.getAttribute('data-style-name');
    var newValue = propertyValueSpan.innerText;
    selectedElement.style.setProperty(propertyName, newValue);
  }
  // Добавляем новый контейнер с информацией о стилях
  conselement1.appendChild(infoContainer1);
}



function updateInfoEverySecond() {
  var propertyInputs = document.querySelectorAll('span.property-name, span.property-value');
  var hasFocus = Array.from(propertyInputs).some(function (span) {
    return span === document.activeElement;
  });

  if (!hasFocus && isElementSelected) {
    var stylesList = document.querySelectorAll('.style-item');

    stylesList.forEach(function (styleItem) {
      var checkbox = styleItem.querySelector('input[type="checkbox"]');
      var propertyNameSpan = styleItem.querySelector('span.property-name');
      var propertyName = propertyNameSpan.innerText;

      // Проверяем, если стиль неактуальный
      var styleValue = selectedElement.style.getPropertyValue(propertyName);
      if (!styleValue) {
        styleItem.style.opacity = '0.5';
        styleItem.style.color = 'gray';
        styleItem.style.textDecoration = 'line-through';
        checkbox.checked = false;
      } else {
        styleItem.style.opacity = '1';
        styleItem.style.color = '';
        styleItem.style.textDecoration = '';
        checkbox.checked = true;
        var propertyValueSpan = styleItem.querySelector('span.property-value');
        propertyValueSpan.innerText = styleValue; // Обновляем значение свойства
      }
    });
  }
}



var stepSize = 1; // Шаг увеличения/уменьшения числа

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (isElementSelected) {
    var propertyNameSpan = event.target.closest('.style-item').querySelector('.property-name');
    if (propertyNameSpan) {
      var propertyName = propertyNameSpan.innerText;
      var propertyValueSpan = event.target.closest('.style-item').querySelector('.property-value');
      var propertyValue = propertyValueSpan.innerText;
      var numericValue = parseFloat(propertyValue); // Преобразуем значение в число с плавающей точкой

      if (!isNaN(numericValue)) {
        event.preventDefault(); // Отключаем автоматическое перемещение курсора

        var unit = propertyValue.replace(numericValue, ''); // Получаем единицу измерения

        if (event.key === 'ArrowUp') {
          numericValue += event.shiftKey ? 10 : 1;
        } else if (event.key === 'ArrowDown') {
          numericValue -= event.shiftKey ? 10 : 1;
        }

        var newValue = numericValue + unit; // Сохраняем новое значение с единицей измерения
        propertyValueSpan.innerText = newValue;
        selectedElement.style.setProperty(propertyName, newValue);
      }
    }
  }
}







// Функция для обработки изменения состояния галочки
function handleCheckboxChange(event) {
  var checkbox = event.target;
  var styleItem = checkbox.parentNode;
  var label = styleItem.querySelector('label');

  if (checkbox.checked) {
    label.style.textDecoration = 'none';
    label.style.color = '';
    styleItem.style.pointerEvents = 'auto'; // Включаем взаимодействие с элементом
    styleItem.style.opacity = '';
    styleItem.style.color = '';
    // Восстанавливаем оригинальное значение стиля
    var propertyNameSpan = styleItem.querySelector('span.property-name');
    var propertyValueSpan = styleItem.querySelector('span.property-value');
    var propertyName = propertyNameSpan.innerText;
    var propertyValue = propertyValueSpan.innerText;
    selectedElement.style.removeProperty(propertyName);
    selectedElement.style.setProperty(propertyName, propertyValue);
  } else {
    label.style.textDecoration = 'line-through';
    label.style.color = 'red';
    // styleItem.style.pointerEvents = 'none'; // Отключаем взаимодействие с элементом
    styleItem.style.opacity = '0.5';
    styleItem.style.color = 'red';
    // Закомментируем стиль путем добавления комментария перед названием свойства
    var propertyNameSpan = styleItem.querySelector('span.property-name');
    var propertyName = propertyNameSpan.innerText;
    var propertyValueSpan = styleItem.querySelector('span.property-value');
    var propertyValue = propertyValueSpan.innerText;
    selectedElement.style.removeProperty(propertyName);
    selectedElement.style.cssText += '/* ' + propertyName + ': ' + propertyValue + ' */';
  }
  event.stopPropagation(); // Останавливаем всплытие события, чтобы предотвратить выделение текста
}

// Устанавливаем интервал для обновления информации каждую секунду
setInterval(updateInfoEverySecond, 1000);

// Функция для обновления свойств элемента
function updateElementProperties(event) {
  // Применяем только активные стили, игнорируя отключенные стили
  var activeStyles = Array.from(stylesList.children).filter(function (styleItem) {
    return styleItem.style.pointerEvents !== 'none';
  });

  if (event.type === 'input' || event.type === 'change' || event.type === 'keyup') {
    if (isElementSelected) {
      var propertyContainer = event.target.parentElement;
      var propertyNameSpan = propertyContainer.querySelector('span.property-name');
      var propertyValueSpan = propertyContainer.querySelector('span.property-value');

      var propertyName = propertyNameSpan.innerText;
      var propertyValue = propertyValueSpan.innerText;

      selectedElement.style[propertyName] = propertyValue;
    }
  }
}










// var conselement = document.getElementById('conselement');

// // function addElementToContainer(element, container0) {
//   var div = document.createElement('div');
//   var arrowButton = document.createElement('button');
//   arrowButton.innerText = '▶';
//   arrowButton.classList.add('arrow-button');

//   arrowButton.addEventListener('click', function() {
//     if (div.classList.contains('collapsed')) {
//       div.classList.remove('collapsed');
//       arrowButton.innerText = '▼';
//     } else {
//       div.classList.add('collapsed');
//       arrowButton.innerText = '▶';
//     }
//   });

//   div.appendChild(arrowButton);
//   div.appendChild(document.createTextNode(element.tagName));
//   div.classList.add('tag');

//   // container0.appendChild(div);

//   for (var i = 0; i < element.children.length; i++) {
//     addElementToContainer(element.children[i], div);
//   }
// }

// var htmlElement = document.documentElement;

// addElementToContainer(htmlElement, conselement);






















// conselement.appendChild();

// conselement1.appendChild(infoContainer);

consoleDiv.appendChild(startSelectionButton);
























// document.body.appendChild(conselement);


consoleDiv.appendChild(dragHandle);
consoleDiv.appendChild(input);
consoleDiv.appendChild(conscont);

conscont.appendChild(output);

conscont.appendChild(conselement);

conscont.appendChild(conselement1);

document.body.appendChild(consoleDiv);




























  input.focus();
  
  var isDragging = false;
  var previousX = 0;
  var previousY = 0;
  


  dragHandle.addEventListener('mousedown', function(event) {
    isDragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
  });
  
  document.addEventListener('mousemove', function(event) {
    if (isDragging) {
      var deltaX = event.clientX - previousX;
      var deltaY = event.clientY - previousY;
      var currentLeft = parseInt(consoleDiv.style.left, 10);
      var currentTop = parseInt(consoleDiv.style.top, 10);
      consoleDiv.style.left = (currentLeft + deltaX) + 'px';
      consoleDiv.style.top = (currentTop + deltaY) + 'px';
      previousX = event.clientX;
      previousY = event.clientY;
    }
  });
  
  document.addEventListener('mouseup', function() {
    isDragging = false;
  });
  
// Наша функция для логирования
function logToConsole(message, type = 'log') {
    let logColors = {
        log: 'white',
        error: 'red',
        warn: 'orange',
    };

    let logColor = logColors[type] || 'black';

    let span = document.createElement('span');
    span.style.color = logColor;
    span.textContent = message;
    output.appendChild(span);
    output.appendChild(document.createElement('br'));
    output.scrollTop = output.scrollHeight;
}

// Перехватываем нажатия клавиш
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let command = input.value;
        logToConsole('@root: ' + command);

        try {
            let result = eval(command);
            if (result !== undefined) {
                logToConsole(result.toString());
            } else {
                logToConsole('Error: Command did not return a value.', 'error');
            }
        } catch (error) {
            logToConsole('Error: ' + error.message, 'error');
        }

        input.value = '';
        event.preventDefault();
    }
});

// Перехватываем глобальные ошибки
window.addEventListener('error', function(event) {
    let message = 'Uncaught Error: ' + event.message;
    logToConsole(message, 'error');
});

// Перехватываем отклоненные промисы
window.addEventListener('unhandledrejection', function(event) {
    let message = 'Unhandled Promise Rejection: ' + event.reason;
    logToConsole(message, 'error');
});

