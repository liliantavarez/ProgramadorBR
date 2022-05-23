//metado que retorna todos os irmaos de um certo elemento
let selected = $("#div3").siblings()

//pode receber um filtro
selected = $("#div3").siblings("#div4")

//todos os items depois do selecionado, tambem por receber um filtro
selected = $("#div3").nextAll()

//retorna o proximo elemento 
selected = $("#div3").next()

//retorna os items ateriores 
selected = $("#div3").prevAll()

//retorna todos os elementos em um intervalo
selected = $("#div1").nextUntil("#div4")
selected = $("#div5").prevUntil("#div2")

console.log(selected)