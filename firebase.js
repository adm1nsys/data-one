


// ваша конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-USrCylp7uUTkrkz1TwklMCKemficO74",
  authDomain: "admin-store-f44d8.firebaseapp.com",
  projectId: "admin-store-f44d8",
  storageBucket: "admin-store-f44d8.appspot.com",
  messagingSenderId: "690057466403",
  appId: "1:690057466403:web:e9677cc4a12d90bc4fd796",
  measurementId: "G-1R059MW041"
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// import firebase from 'firebase/app';
// import 'firebase/auth';
// const provider = new OAuthProvider('apple.com');
// const apiurl = "AIzaSyD-USrCylp7uUTkrkz1TwklMCKemficO74";
// Initialize Firebase


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Use Firebase auth within the same <script> tag
const auth = getAuth();


// Регистрация нового пользователя
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Регистрация успешна
    const user = userCredential.user;
    // console.log(user);
  })
  .catch((error) => {
    // Ошибка регистрации
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });

// Вход существующего пользователя
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Вход успешен
    const user = userCredential.user;
    // console.log(user);
  })
  .catch((error) => {
    // Ошибка входа
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });

// Обработчик события успешной регистрации
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // const email = registerEmailInput.value;
  // const password = registerPasswordInput.value;



  // Регистрация нового пользователя
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Регистрация успешна
      const user = userCredential.user;
      // console.log(user);
    })
    .catch((error) => {
      // Ошибка регистрации
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});

// Обработчик события успешного входа
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  // Вход существующего пользователя
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Вход успешен
      const user = userCredential.user;
      // console.log(user);
    })
    .catch((error) => {
      // Ошибка входа
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
    });
});


