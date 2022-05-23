let h1 = $("h1");
h1.text("Lista de Compras");
console.log(h1);

// $("#lista1").html("<li>Novo Item</li> <li>Novo Item 2</li>")

// $("#novo").val("Arroz");
$("#novo").attr("name", "item de compra");

//função recebe o index e valor original do atributo como parametro
$("li").attr("name", function (i, oValue) {
  return oValue + i;
});

let input = $("#novo").val();
console.log(input);

//alterando tamanho maximo e tipo de atributo
$("input").attr("maxlength",5).attr("type","password")