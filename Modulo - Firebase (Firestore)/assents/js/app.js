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

const TURMA = "turmaA";

let db = firebase.firestore();

//Inserindo novo documento no Banco de Dados

// db.collection(TURMA)
//   .add({//Gera um ID automaticamente
//     nome: "Marcos",
//     sobrenome: "Santos",
//     notas: { nota1: 9.6, nota2: 7.5 },
//   })
//   .then((doc) => {
//     console.log("Documento inserido com sucesso", doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Inserir com ID específico atraves do metado SET

// db.collection(TURMA)
//   .doc("AlunoNovo")
//   .set({//Não retorna nenhum objeto
//     nome: "Mariana",
//     sobrenome: "Silva",
//     notas: { nota1: 6.9, nota2: 7.5 },
//   })
//   .then(() => {
//     console.log("Documento inserido com sucesso");
//   }).catch((err)=>{
//       console.log(err)
//   });

//Modificando elemento com o UPDATE

// db.collection(TURMA)
//   .doc("AlunoNovo")
//   .update({
//     //Não retorna nenhum objeto
//     "notas.nota1": 6.7,
//   })
//   .then(() => {
//     console.log("Documento alterado com sucesso");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Inserindo um novo campo
// db.colletion(TURMA)
//   .doc("jnXbfZoC1KIHl4XczO6W")
//   .update({
//     faltas: 4,
//   })
//   .then(() => {
//     console.log("Documento alterado com sucesso");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db.collection(TURMA)
//   .doc("jnXbfZoC1KIHl4XczO6W")
//   .update({
//     estadosVisitados: ["Rio de Janeiro", "São Paulo"],
//   })
//   .then(() => {
//     console.log("Documento alterado com sucesso");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Adcionando novos elementos a um array sem apagar os que ja existem nele

// db.colletion(TURMA)
//   .doc("jnXbfZoC1KIHl4XczO6W")
//   .update({
//     estadosVisitados: firebase.firestore.FieldValue.arrayUnion(
//       "Bahia",
//       "Maranhão"
//     ),
//   })
//   .then(() => {
//     console.log("Lista de estados visitados atualizada");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Removendo elementos de um array

// db.collection(TURMA)
//   .doc("jnXbfZoC1KIHl4XczO6W")
//   .update({
//     estadosVisitados: firebase.firestore.FieldValue.arrayRemove("Rio de Janeiro"),
//   })
//   .then(() => {
//     console.log("Lista de estados visitados atualizada");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Incrementar valor de uma coleção

db.collection(TURMA)
  .doc("jnXbfZoC1KIHl4XczO6W")
  .update({
    faltas: firebase.firestore.FieldValue.increment(2),
  })
  .then(() => {
    console.log("Numero de faltas atualizado com sucesso");
  })
  .catch((err) => {
    console.log(err);
  });

//Ler todos os dados de uma coleção

// db.collection("turmaA")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.nome);
//     });
//   });

//Usando where() para filtrar busca

// db.collection("turmaA")
//   .where("nome", "==", "Lilian")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.data().notas);
//     });
//   });

// db.collection("turmaA")
//   .where("notas.nota1", "<", 7)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });
