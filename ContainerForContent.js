




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
Container1.appendChild(ContainerForContent1);

// Home Page
const HomePage = document.createElement("script");
HomePage.src = "HomePage.js";
Container1.appendChild(HomePage);

// data2
const data2 = document.createElement("script");
data2.src = "data2.js";
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
