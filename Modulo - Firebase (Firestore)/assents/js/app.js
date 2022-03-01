//Inicializando FireBase
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

let db = firebase.firestore();

//Ler todos os dados de uma coleção
db.collection("turmaA")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let aluno = doc.data();
      console.log(aluno.nome);
    });
  });

//Usando where() para filtrar busca
db.collection("turmaA")
  .where("nome", "==", "Lilian")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data().notas);
    });
  });

db.collection("turmaA")
  .where("notas.nota1", "<", 7)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
