var tabuleiro   = new Array(9)

var jogadorAtual
var formas      = ["x","o"]

function esconder(){
    document.querySelector("#tabuleiro").style.visibility = 'hidden'
}

function comecar(){
    document.querySelector("#tabuleiro").style.visibility = 'visible'
    document.querySelector("#nomeJogadores").style.visibility = 'hidden'
}