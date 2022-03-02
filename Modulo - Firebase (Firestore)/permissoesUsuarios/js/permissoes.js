const config  = {
  apiKey: "AIzaSyBpDxbHkDr4BlIUMiRo9KtHfqyTjiCSZjM",
  authDomain: "teste-96a32.firebaseapp.com",
  projectId: "teste-96a32",
  storageBucket: "teste-96a32.appspot.com",
  messagingSenderId: "540943208294",
  appId: "1:540943208294:web:b2eac25e396116333d42a7",
};

firebase.initializeApp(config);

let db = firebase.firestore();

db.collection('lista').get().then((snapshot =>{
    snapshot.forEach(item => {
        console.log(item.data())
    });
})).catch(error=>{
    console.log(error)
})