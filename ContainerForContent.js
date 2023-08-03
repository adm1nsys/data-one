



const versioncontainer = document.createElement("div");
versioncontainer.style.display = "flex";
versioncontainer.style.flexDirection = "column";
versioncontainer.style.position = "fixed";
versioncontainer.style.width = "310px";
versioncontainer.style.height = "320px";
versioncontainer.style.right = "-1000px";
versioncontainer.style.bottom = "-1000px";
versioncontainer.style.transition = "1s";
versioncontainer.style.borderRadius = "10px";
versioncontainer.style.border = "3px solid color(srgb 0.18 0.18 0.18)";
versioncontainer.style.zIndex = "999999999999999";
versioncontainer.style.boxShadow = "0px 0px 17px black";
document.body.appendChild(versioncontainer);

let gradientDegree = 296; // Изменяемый градус градиента

function updateGradient() {
  versioncontainer.style.background = `conic-gradient(from ${gradientDegree}deg, rgb(22, 22, 22), rgb(46, 46, 46) 48.39%, rgb(37, 37, 37))`;
  gradientDegree = (gradientDegree + 1) % 360; // Увеличиваем градус на 1 и ограничиваем в диапазоне [0, 360)
  requestAnimationFrame(updateGradient);
}

updateGradient();

const versioncontainerclose = document.createElement("div");
versioncontainerclose.textContent = "X";
versioncontainerclose.style.fontFamily = "Arial";
versioncontainerclose.style.fontSize = "20px";
versioncontainerclose.style.position = "absolute";
versioncontainerclose.style.background = "gray";
versioncontainerclose.style.borderRadius = "999px";
versioncontainerclose.style.paddingLeft = "7px";
versioncontainerclose.style.paddingRight = "7px";
versioncontainerclose.style.paddingTop = "2px";
versioncontainerclose.style.paddingBottom = "2px";
versioncontainerclose.style.left = "-10px";
versioncontainerclose.style.top = "-10px";
versioncontainerclose.style.boxShadow = "0px 0px 17px black";
versioncontainer.appendChild(versioncontainerclose);

const versioncontainertitle = document.createElement("div");
versioncontainertitle.textContent = "Developer Beta V0.3";
versioncontainertitle.style.fontFamily = "Gilroy";
versioncontainertitle.style.fontSize = "25px";
versioncontainertitle.style.position = "absolute";
versioncontainertitle.style.left = "20px";
versioncontainertitle.style.top = "20px";
versioncontainer.appendChild(versioncontainertitle);

const versioncontainertitle1 = document.createElement("p");
versioncontainertitle1.textContent = "Welcome to the Developer Beta! We're excited to have you on board. Please keep in mind that this version is still under development and may be unstable at times. Our team is working tirelessly to bring you the best experience possible. Your patience and understanding are greatly appreciated. Stay tuned for the official release, where we'll have all the exciting features polished and ready for you. Thank you for being a part of this journey with us!";
versioncontainertitle1.style.fontFamily = "Gilroy";
versioncontainertitle1.style.fontSize = "15px";
versioncontainertitle1.style.position = "absolute";
versioncontainertitle1.style.left = "20px";
versioncontainertitle1.style.right = "20px";
versioncontainertitle1.style.top = "50px";
versioncontainer.appendChild(versioncontainertitle1);


versioncontainerclose.addEventListener("mouseenter", function() {
  versioncontainerclose.style.transition = "0.4s";
  versioncontainerclose.style.background = "rgb(93, 93, 93)";
  versioncontainerclose.style.cursor = "pointer";
});

versioncontainerclose.addEventListener("mouseleave", function() {
  versioncontainerclose.style.transition = "0.4s";
  versioncontainerclose.style.background = "gray";
  versioncontainerclose.style.cursor = "normal";
});

      versioncontainerclose.addEventListener("click", function() {
versioncontainer.style.display = "flex";

versioncontainer.style.right = "-1000px";

versioncontainer.style.bottom = "-1000px";


      });


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
  location.reload();
}

// Вызываем функцию для перезапуска страницы
restartPage();
  }



// Home Page
const HomePage = document.createElement("script");
HomePage.src = "https://administrati0n.github.io/data-one/HomePage.js";
Container1.appendChild(HomePage);

// data2
const data2 = document.createElement("script");
data2.src = "https://administrati0n.github.io/data-one/data2.js";
document.body.appendChild(data2);


// // firebase
// const firebase = document.createElement("script");
// firebase.src = "firebase.js";
// document.body.appendChild(firebase);

// Динамическая загрузка модуля Firebase
import("./firebase.js")
  .then((module) => {
    // Используйте экспорты из модуля
    const { initializeApp, getAnalytics, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = module;

    // Ваш код, использующий Firebase
    const firebaseConfig = {
      // Ваша конфигурация Firebase
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);

    // Регистрация нового пользователя
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Регистрация успешна
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Ошибка регистрации
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // Вход существующего пользователя
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Вход успешен
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Ошибка входа
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  })
  .catch((error) => {
    console.log("Ошибка загрузки модуля Firebase:", error);
  });


Container1.appendChild(leftBar);
