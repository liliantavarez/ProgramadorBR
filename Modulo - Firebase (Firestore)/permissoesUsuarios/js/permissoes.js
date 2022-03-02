const config = {
  apiKey: "AIzaSyBpDxbHkDr4BlIUMiRo9KtHfqyTjiCSZjM",
  authDomain: "teste-96a32.firebaseapp.com",
  projectId: "teste-96a32",
  storageBucket: "teste-96a32.appspot.com",
  messagingSenderId: "540943208294",
  appId: "1:540943208294:web:b2eac25e396116333d42a7",
};

firebase.initializeApp(config);

let db = firebase.firestore();
let auth = firebase.auth();

function ler() {
  db.collection("lista")
    .get()
    .then((snapshot) => {
      snapshot.forEach((item) => {
        console.log(item.data());
      });
    })
    .catch((error) => {
      console.log(error);
    });
}


function escrever() {
    db.collection("lista")
    .add({
        novoObjeto: "Novo Objeto",
      numero: Math.random(),
    })
    .then((doc) => {
      console.log(doc);
    })
    .catch((error) => {
        console.log(error);
    });
}

function login() {
    let userEmail = "novoteste@teste.com";
    let userSenha = "123abc";
  
    //setPersitence: Metado utilizado para alterar o estado de persistencia
    //SESSION: So funciona para aba/janela que o login for feito
    //LOCAL: Padrão, persiste em qualquer janela 
    //NONE: o login é desfeito sempre que a janela for atualizada
  
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
      auth.signInWithEmailAndPassword(userEmail, userSenha)
          .then((loggedUser) => {
            console.log(auth.currentUser);
            escrever()
          })
          .catch((error) => {
            console.log(error);
          });
    }).catch((error)=>{
      console.log(error)
    })  
}

login();

// ler();

