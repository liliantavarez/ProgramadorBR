  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJaXP3MWTkCH-NnyQ451MA1vEuY0mEQOU",
    authDomain: "colegio-8f959.firebaseapp.com",
    projectId: "colegio-8f959",
    storageBucket: "colegio-8f959.appspot.com",
    messagingSenderId: "807476329251",
    appId: "1:807476329251:web:a7e47a1969b77a6237aa96",
    measurementId: "G-KE5Y6HRPNR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);