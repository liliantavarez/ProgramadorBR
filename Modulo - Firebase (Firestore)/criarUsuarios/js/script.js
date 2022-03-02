var config = {
  apiKey: "AIzaSyBJaXP3MWTkCH-NnyQ451MA1vEuY0mEQOU",
  authDomain: "colegio-8f959.firebaseapp.com",
  projectId: "colegio-8f959",
  storageBucket: "colegio-8f959.appspot.com",
  messagingSenderId: "807476329251",
  appId: "1:807476329251:web:a7e47a1969b77a6237aa96",
  measurementId: "G-KE5Y6HRPNR",
};

firebase.initializeApp(config);

let auth = firebase.auth();

//Metado do firebase para criar usuarios

function criarUsuario() {
  let newUserEmail = "novoteste@teste.com";
  let newUserSenha = "123abc";

  auth.createUserWithEmailAndPassword(newUserEmail, newUserSenha)
      .then((user) => {
        console.log(user);
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

  auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{
    auth.signInWithEmailAndPassword(userEmail, userSenha)
        .then((loggedUser) => {
          console.log(auth.currentUser);
        })
        .catch((error) => {
          console.log(error);
        });
  }).catch((error)=>{
    console.log(error)
  })

}

function logout() {
  auth.signOut()
      .then(() => {
        console.log("Usuario foi deslogado");
      })
      .catch((error) => {
        console.log(error);
      });
}

//onAuthStateChanged: Dispara a função sempre que o status do usuario muda

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("Ninguem Logado");
  }
});

// setTimeout(login, 2000);
// setTimeout(logout,2000);
