var msg = " Admin Store ";
var chars = Array.from(msg);
var animationTimer = null; // Переменная для хранения таймера анимации
var originalTitle = document.title; // Сохраняем исходное значение заголовка

function scrollTitle() {
  chars.push(chars.shift());
  document.title = chars.join("");
  animationTimer = setTimeout(scrollTitle, 100);
}

function startAnimation() {
  scrollTitle();
}

function stopAnimation() {
  clearTimeout(animationTimer); // Отменяем таймер анимации
  document.title = originalTitle; // Восстанавливаем исходное значение заголовка
}

function handleVisibilityChange() {
  if (document.visibilityState === "visible") {
    startAnimation();
  } else {
    stopAnimation();
  }
}

(function () {
  // Запускаем анимацию изначально, если пользователь находится на странице
  if (document.visibilityState === "visible") {
    startAnimation();
  }

  // Слушаем событие visibilitychange
  document.addEventListener("visibilitychange", handleVisibilityChange);
})();



// Создаем элементы страницы
// var body = document.body;

// Устанавливаем текст и стили элементов
body.style.background = 'rgb(0, 0, 0)';
body.style.margin = '0px';
// body.style.overflowX = "hidden";
// body.style.marginLeft = 'auto';
// body.style.marginRight = 'auto';
// body.style.maxWidth = '1000px';
body.style.display = 'flex';
body.style.color = 'white';
// var htmlElement = document.querySelector('html');
// htmlElement.setAttribute('id', 'htmlpage');




var stylescrollbar = document.createElement('style');
stylescrollbar.innerHTML = `
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    opacity: 1;
    // background: black; 
    border-radius: 0% 0% 0% 0%;
  }

  ::-webkit-scrollbar-thumb {
    background: black; 
    border: solid;
    border-radius: 1px;
    border-color: white;
    border-radius: 0% 0% 0% 0%;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: black; 
  }
`;

document.head.appendChild(stylescrollbar);






function changeTheme() {
if(ThemeWeb === "dark"){
body.style.background = 'rgb(33, 33, 33)';
body.style.color = 'white';
body.style.transition = '0.8s';
leftBar.style.transition = '0.8s';
SettingCT1T.style.color = "white";
SettingCT0.style.transition = '0.8s';
SettingCT1.style.transition = '0.8s';
leftBarLogo1.style.transition = '0.8s';
leftBarLogo2.style.transition = '0.8s';

leftBar.style.background = "black";
SettingCT0.style.background = "black";
SettingCT0T.style.color = "white";
SettingCT1.style.background = "black";
leftBarLogo1.style.color = "white";
leftBarLogo2.style.color = "white";
leftBarLogo2.style.textShadow = " -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black";

}else if (ThemeWeb === "light") {
body.style.background = 'white';
body.style.color = 'black';
body.style.transition = '0.8s';
leftBar.style.transition = '0.8s';
SettingCT1T.style.color = "black";
SettingCT0T.style.color = "black";
SettingCT0.style.transition = '0.8s';
SettingCT1.style.transition = '0.8s';
leftBarLogo1.style.transition = '0.8s';
leftBarLogo2.style.transition = '0.8s';

leftBar.style.background = "white";
SettingCT0.style.background = "white";
SettingCT1.style.background = "white";
leftBarLogo1.style.color = "black";
leftBarLogo2.style.color = "black";
leftBarLogo2.style.textShadow = " -0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white";

}else if (ThemeWeb === "rose") {
body.style.background = 'rgba(255, 219, 230, 1)';
body.style.color = 'rgba(102, 57, 70, 1)';
body.style.transition = '0.8s';
SettingCT1T.style.color = "rgba(102, 57, 70, 1)";
leftBar.style.transition = '0.8s';
SettingCT0.style.transition = '0.8s';
SettingCT1.style.transition = '0.8s';
leftBarLogo1.style.transition = '0.8s';
leftBarLogo2.style.transition = '0.8s';

leftBar.style.background = "rgba(255, 219, 230, 1)";
SettingCT0.style.background = "rgba(255, 219, 230, 1)";
SettingCT1.style.background = "rgba(255, 219, 230, 1)";
leftBarLogo1.style.color = "rgba(102, 57, 70, 1)";
SettingCT0T.style.color = "rgba(102, 57, 70, 1)";
leftBarLogo2.style.color = "rgba(102, 57, 70, 1)";
leftBarLogo2.style.textShadow = " -0.5px 0 rgba(255, 219, 230, 1), 0 0.5px rgba(255, 219, 230, 1), 0.5px 0 rgba(255, 219, 230, 1), 0 -0.5px rgba(255, 219, 230, 1)";

}else if (ThemeWeb === "blue") {
body.style.background = 'rgba(219, 238, 255, 1)';
body.style.color = 'rgba(57, 75, 102, 1)';
body.style.transition = '0.8s';
leftBar.style.transition = '0.8s';
SettingCT1T.style.color = "rgba(57, 75, 102, 1)";
SettingCT0T.style.color = "rgba(57, 75, 102, 1)";
SettingCT0.style.transition = '0.8s';
SettingCT1.style.transition = '0.8s';
leftBarLogo1.style.transition = '0.8s';
leftBarLogo2.style.transition = '0.8s';

leftBar.style.background = "rgba(219, 238, 255, 1)";
SettingCT0.style.background = "rgba(219, 238, 255, 1)";
SettingCT1.style.background = "rgba(219, 238, 255, 1)";
leftBarLogo1.style.color = "rgba(57, 75, 102, 1)";
leftBarLogo2.style.color = "rgba(57, 75, 102, 1)";
leftBarLogo2.style.textShadow = " -0.5px 0 rgba(219, 238, 255, 1), 0 0.5px rgba(219, 238, 255, 1), 0.5px 0 rgba(219, 238, 255, 1), 0 -0.5px rgba(219, 238, 255, 1)";

}else if (ThemeWeb === "green") {
body.style.background = 'rgba(235, 255, 219, 1)';
body.style.color = 'rgba(57, 102, 59, 1)';
body.style.transition = '0.8s';
leftBar.style.transition = '0.8s';
SettingCT1T.style.color = "rgba(57, 102, 59, 1)";
SettingCT0T.style.color = "rgba(57, 102, 59, 1)";
SettingCT0.style.transition = '0.8s';
SettingCT1.style.transition = '0.8s';
leftBarLogo1.style.transition = '0.8s';
leftBarLogo2.style.transition = '0.8s';

leftBar.style.background = "rgba(235, 255, 219, 1)";
SettingCT0.style.background = "rgba(235, 255, 219, 1)";
SettingCT1.style.background = "rgba(235, 255, 219, 1)";
leftBarLogo1.style.color = "rgba(57, 102, 59, 1)";
leftBarLogo2.style.color = "rgba(57, 102, 59, 1)";
leftBarLogo2.style.textShadow = " -0.5px 0 rgba(235, 255, 219, 1), 0 0.5px rgba(235, 255, 219, 1), 0.5px 0 rgba(235, 255, 219, 1), 0 -0.5px rgba(235, 255, 219, 1)";

}else if (ThemeWeb === "purple") {
body.style.background = 'rgba(231, 211, 255, 1)';
body.style.color = 'rgba(69, 57, 102, 1)';
body.style.transition = '0.8s';
leftBar.style.transition = '0.8s';
SettingCT1T.style.color = "rgba(69, 57, 102, 1)";
SettingCT0T.style.color = "rgba(69, 57, 102, 1)";
SettingCT0.style.transition = '0.8s';
SettingCT1.style.transition = '0.8s';
leftBarLogo1.style.transition = '0.8s';
leftBarLogo2.style.transition = '0.8s';

leftBar.style.background = "rgba(231, 211, 255, 1)";
SettingCT0.style.background = "rgba(231, 211, 255, 1)";
SettingCT1.style.background = "rgba(231, 211, 255, 1)";
leftBarLogo1.style.color = "rgba(69, 57, 102, 1)";
leftBarLogo2.style.color = "rgba(69, 57, 102, 1)";
leftBarLogo2.style.textShadow = " -0.5px 0 rgba(231, 211, 255, 1), 0 0.5px rgba(231, 211, 255, 1), 0.5px 0 rgba(231, 211, 255, 1), 0 -0.5px rgba(231, 211, 255, 1)";

}
}

// body.style.height = '99999px';
// body.style.width = '99999px';

// Добавляем элементы на страницу

