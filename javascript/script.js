var alunos=["Iago","João","Jorge"]
var notas1=[7.0,6.5,9.5]
var notas2=[8.0,7.0,8.5]

function media(n1,n2){
    return (n1+n2)/2
}
function final(media){
    if (media>7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

for (var i in alunos) {

    var mediaFinal = media(notas1[i],notas2[i])
    var resultado = final(mediaFinal)

    console.log(alunos[i]+" | "
    +notas1[i]+" | "
    +notas2[i]+" | "
    +mediaFinal+" | "+resultado)
}