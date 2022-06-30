//faznedo tratamentos de erros usando try catch

/*

 if (nome == "") {
   throw "O nome não pode ser vazio";
} //aborta o programa caso o nome esteja vazio

*/

try {//o que deve ser feito
  console.log(nome);
} catch (error) {//caso não faça o que está no try dispara o erro mas não aborta o codigo
  console.log("Houve um erro =>", error);
} finally {//executa independente de ter um erro ou não
  console.log("Boa noite!"); //será executado apois o erro
}
