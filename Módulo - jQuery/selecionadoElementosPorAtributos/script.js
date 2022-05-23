//remove os filhos da lista
//$("#lista1").empty()

//remove a lista inteira
//$("#lista1").remove()

//remove um item especifico com remove
$("#lista1>li").remove("[key=3],[key=5]")

$("#lista2").find("[key = 2]").remove()

let lista1 = $("#lista1")

lista1.append("<li class='item'>Novo item no fim</li>")
lista1.prepend("<li class='item'>Novo item no inicio</li>")

//depois do elemento selecionado
lista1.after("<li class='item'>Novo item</li>")

//antes do elemento selecionado
lista1.before("<li class='item'>Novo item</li>")