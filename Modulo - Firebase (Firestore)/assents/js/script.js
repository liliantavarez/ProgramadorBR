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

  auth.signInWithEmailAndPassword(userEmail, userSenha)
    .then((loggedUser) => {
      console.log(auth.currentUser);
    })
    .catch((error) => {
      console.log(error);
    });
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
// setTimeout(logout,2000)
