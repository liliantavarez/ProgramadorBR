const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
      apiKey: "AIzaSyBJaXP3MWTkCH-NnyQ451MA1vEuY0mEQOU",
      authDomain: "colegio-8f959.firebaseapp.com",
      projectId: "colegio-8f959",
});

var db = firebase.firestore();

db.collection("turmaA")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
