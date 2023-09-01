let customContextMenu = null;

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  if (DevMode === "1") {
    if (customContextMenu) {
      customContextMenu.remove();
    }

    customContextMenu = document.createElement("div");
    customContextMenu.id = "customContextMenu";
    customContextMenu.style.position = "fixed";
    customContextMenu.style.display = "flex";
    customContextMenu.style.flexDirection = "column";
    customContextMenu.style.zIndex = "9999999999999999999999";
    customContextMenu.style.backgroundColor = "black";
    customContextMenu.style.width = "500px";
    customContextMenu.style.height = "250px";
    customContextMenu.style.border = "3px solid white";
    customContextMenu.style.borderRadius = "10px";
    customContextMenu.style.overflow = "hidden";
    // customContextMenu.style.padding = "5px";
    customContextMenu.style.left = e.pageX + "px";
    customContextMenu.style.top = e.pageY + "px";

    const menuWidth = 500;
    const menuHeight = 250;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let left = e.clientX;
    let top = e.clientY;

    if (left + menuWidth > windowWidth) {
      left = windowWidth - menuWidth;
    }

    if (top + menuHeight > windowHeight) {
      top = windowHeight - menuHeight;
    }

    customContextMenu.style.left = left + "px";
    customContextMenu.style.top = top + "px";

    const redField = document.createElement("div");
    redField.style.width = "250px";
    redField.style.height = "250px";
    redField.style.position = "absolute";
    redField.style.right = "0px";
    redField.style.top = "0px";
    redField.style.background = "rgb(60, 0, 0)";
    redField.addEventListener("contextmenu", function (e) {
      e.stopPropagation();
      // Здесь можно вызвать стандартное контекстное меню для красного поля
      // alert("Стандартное контекстное меню для красного поля");
    });
    customContextMenu.appendChild(redField);

    const action1Btn = document.createElement("button");
    action1Btn.textContent = "Console";
    action1Btn.style.width = "250px";
    action1Btn.addEventListener("click", function () {

if(consoleDiv.style.display === 'block'){
    consoleDiv.style.display = 'none';

}else{
    consoleDiv.style.display = 'block';
    conscont.style.height = consoleDiv.offsetHeight - dragHandle.offsetHeight - input.offsetHeight + 18 + 'px';
console.log(consoleDiv.offsetHeight - dragHandle.offsetHeight - input.offsetHeight + 'px');
      // alert("Action 1");
      customContextMenu.remove();
      customContextMenu = null;
}


    });
    customContextMenu.appendChild(action1Btn);
    
    const action2Btn = document.createElement("button");
    action2Btn.textContent = "Action 2";
    action2Btn.style.width = "250px";
    action2Btn.addEventListener("click", function () {
      alert("Action 2");
      customContextMenu.remove();
      customContextMenu = null;
    });
    customContextMenu.appendChild(action2Btn);
    
    document.body.appendChild(customContextMenu);
  }
});

document.addEventListener("mousedown", function (e) {
  if (e.button === 0 || e.button === 2) {
    if (customContextMenu && !customContextMenu.contains(e.target)) {
      customContextMenu.remove();
      customContextMenu = null;
    }
  }
});






const versioncontainertitle = document.createElement("div");
versioncontainertitle.textContent = sitevers;
versioncontainertitle.style.fontFamily = Font1;
versioncontainertitle.style.fontSize = "15px";
versioncontainertitle.style.color = "rgba(255, 255, 255, 0.28)";
versioncontainertitle.style.position = "fixed";
versioncontainertitle.style.right = "5px";
versioncontainertitle.style.top = "5px";
versioncontainertitle.style.zIndex = "9999999999999999999";
document.body.appendChild(versioncontainertitle);



const Container2 = document.createElement("div");
Container2.style.display = "none";
Container2.style.flexDirection = "column";
Container2.style.overflow = "auto";
Container2.style.position = "relative";
Container2.style.opacity = "0.5";
Container2.style.marginTop = "0px";
Container2.style.border = "0px solid white";
// const containerHeight2 = window.innerHeight * 1 - 4; // Пример: 50% от высоты окна браузера
// Container2.style.height = `${containerHeight2}px`;
// Container2.style.maxWidth = "850px";
Container2.style.width = "100%";
// Container2.style.marginLeft = "auto";
// Container2.style.marginRight = "auto";
document.body.appendChild(Container2);

const ContainerForContent1 = document.createElement("div");
ContainerForContent1.style.display = "flex";
ContainerForContent1.style.flexDirection = "column";
ContainerForContent1.style.position = "relative";
// ContainerForContent1.style.background = "red";
// ContainerForContent1.style.background = "red";
ContainerForContent1.style.margin = "0px";
ContainerForContent1.style.zIndex = "1";
ContainerForContent1.style.width = "100%";
ContainerForContent1.style.height = "100%";
ContainerForContent1.style.minHeight = "100vh";
ContainerForContent1.style.marginBottom = "0px";
  try {
Container1.appendChild(ContainerForContent1);
  } catch (error) {
    // console.error("Произошла ошибка:", error.message);
    function restartPage() {
  // location.reload();
}

// Вызываем функцию для перезапуска страницы
// restartPage();
  }

function shimmerEffect(element) {
    // Создаем стиль для анимации
    // element.style.WebkitBackgroundClip = "text";
    const shimmerStyle = document.createElement('style');
    shimmerStyle.type = 'text/css';
    shimmerStyle.innerHTML = `
        @keyframes shimmer {
            0% {
                background-position: -2500px 0;
            }
            50% {
                background-position: 2500px 0;
            }
            100% {
                background-position: -2500px 0;
            }
        }
        .shimmer-effect {
            animation: shimmer 50s linear infinite;  // Изменил timing function на linear
            background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.43601190476190477) 50%, rgba(255,255,255,1) 100%);
            background-size: 1000px 100%;
        }
    `;
    document.head.appendChild(shimmerStyle);

    // Применяем эффект к элементу
    element.classList.add('shimmer-effect');
}


// loadScript('HomePage', 'body', Container1);
// const hpage = document.createElement("script");
// hpage.src = "https://administrati0n.github.io/data-one/HomePage.js";
// Container1.appendChild(hpage);
// loadScript('projchangecat', 'body', Container1);
// loadScript('settingspage', 'body', Container1);





loadScript('HomePage', 'body', Container1);
loadScript('Pin', 'body', Container1);
loadScript('projchangecat', 'body', Container1);
loadScript('settingspage', 'body', Container1);
loadScript('profilepage');
loadScript('informationpage');
// loadScript('data2');

// // Profile Page
// loadScript('profilepage', 'body', Container1);

// // Information Page
// loadScript('informationpage', 'body', Container1);

// // Pinned
// loadScript('Pin');

// // data2
// loadScript('data2');


// // firebase
// const firebase = document.createElement("script");
// firebase.src = "firebase.js";
// document.body.appendChild(firebase);

// Динамическая загрузка модуля Firebase
// import("./firebase.js")
//   .then((module) => {
//     // Используйте экспорты из модуля
//     const { initializeApp, getAnalytics, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = module;

//     // Ваш код, использующий Firebase
//     const firebaseConfig = {
//       // Ваша конфигурация Firebase
//     };

//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);
//     const auth = getAuth(app);

//     // Регистрация нового пользователя
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Регистрация успешна
//         const user = userCredential.user;
//         // console.log(user);
//       })
//       .catch((error) => {
//         // Ошибка регистрации
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error(errorMessage);
//       });

//     // Вход существующего пользователя
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Вход успешен
//         const user = userCredential.user;
//         // console.log(user);
//       })
//       .catch((error) => {
//         // Ошибка входа
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error(errorMessage);
//       });
//   })
//   .catch((error) => {
//     console.error("Error loading module Firebase:", error);
//   });


// Container1.appendChild(leftBar);




const copyrightc0 = document.createElement("div");
copyrightc0.style.display = "flex";
copyrightc0.style.position = "relative";
copyrightc0.style.width = "100%";
copyrightc0.style.height = "50px";
copyrightc0.style.background = "black";
copyrightc0.style.borderTop = "2px solid gray";
copyrightc0.style.margin = "0px 0px 0px 120px";
copyrightc0.style.color = "white";
copyrightc0.style.fontSize = "15px";
copyrightc0.style.fontFamily = Font1;
copyrightc0.style.justifyContent = "center";
copyrightc0.style.justifyItems = "center";
copyrightc0.style.alignItems = "center";
copyrightc0.style.alignContent = "center";
Container1.appendChild(copyrightc0);

const copyrightText = document.createElement("div");
copyrightText.style.display = "flex";
copyrightText.style.alignItems = "center"; // Чтобы текст был по центру по вертикали
copyrightText.style.justifyContent = "center"; // Чтобы текст был по центру по горизонтали
// copyrightText.style.width = "100%";
// copyrightText.style.height = "100%";
copyrightText.style.marginRight = `3px`;
const currentYear = new Date().getFullYear(); // Получаем текущий год
copyrightText.textContent = `© Copyright By `; // Замените "Название компании" на ваше название

// Добавляем элемент копирайта в ваш контейнер
copyrightc0.appendChild(copyrightText);

const copyrightText1 = document.createElement("a");
copyrightText1.href = "http://administrati0n.github.io/main/";  // Замените на URL вашей компании, если есть
copyrightText1.textContent = "Admin inc.";
copyrightText1.style.color = "white";  // Цвет ссылки. Вы можете изменить его, если хотите
copyrightText1.style.textDecoration = "none"; 
copyrightc0.appendChild(copyrightText1);

copyrightText1.addEventListener("mouseenter", function() {
  copyrightText1.style.textDecoration = "underline";
});

copyrightText1.addEventListener("mouseleave", function() {
  copyrightText1.style.textDecoration = "none";
});

const copyrightText2 = document.createElement("div");
copyrightText2.textContent = `2020-${currentYear}`;
copyrightText2.style.marginLeft = `3px`;
copyrightc0.appendChild(copyrightText2);

