//recebe a data atual
var d = new Date();

var semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
var mes = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

console.log(d);
console.log(d.getDate());
console.log(semana[d.getDay()]); //numero do dia da semana
console.log(mes[d.getMonth()]);
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());

//criando data passando parametros: ano/mes/dia/horas/minutos/segundos/milissegundos
var data = new Date(2009, 03, 04, 12, 43, 11, 1000);
//var data = new Date("11-03-2020 22:33:21");
//var data = new Date("11/03/2020 22:33:21");
//var data = new Date("12 23 2020 11:23:33");
console.log(data);
