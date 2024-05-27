let tabuleiro = ["", "", "", "", "", "", "", "", ""]

let jogadorAtual = "vez"
let jogador1     = ""
let jogador2     = ""
let nome1        = document.querySelector("input#jogador1")
let nome2        = document.querySelector("input#jogador2")
let formas       = ["x", "o"]
let body         = document.querySelector("body")
let pos          = document.getElementsByClassName("box")

function vez(p1) {
    if (jogador2 == jogadorAtual) {
        pos[p1 - 1].style.background = "blue"
        tabuleiro[p1 - 1] = formas[1]
        jogador1 = jogadorAtual
        jogador2 = ""
        vitoria
    } else
        if (jogador1 == jogadorAtual) {
            pos[p1 - 1].style.background = "red"
            tabuleiro[p1 - 1] = formas[0]
            jogador1 = ""
            jogador2 = jogadorAtual
            vitoria()
        }
}
function comecar() {
    document.querySelector("#tabuleiro").style.display = 'grid'
    document.querySelector("#nomeJogadores").style.display = 'none'
    jogador1 = jogadorAtual
    vez()
}
function movimento(p) {
    if (tabuleiro[p - 1] == "x" || tabuleiro[p - 1] == "o") {
        alert("Esta casa já está ocupada!")
    } else {
        vez(p)
    }
}

function teste(t){
    
}

function vitoria() {
    let vitoria = document.querySelector("#vitoria")
    let visor = document.querySelector("#visor")

    if ((tabuleiro[0] == "x" && tabuleiro[3] == "x" && tabuleiro[6] == "x")||
        (tabuleiro[1] == "x" && tabuleiro[4] == "x" && tabuleiro[7] == "x")||
        (tabuleiro[2] == "x" && tabuleiro[5] == "x" && tabuleiro[8] == "x")||
        (tabuleiro[0] == "x" && tabuleiro[1] == "x" && tabuleiro[2] == "x")||
        (tabuleiro[3] == "x" && tabuleiro[4] == "x" && tabuleiro[5] == "x")||
        (tabuleiro[6] == "x" && tabuleiro[7] == "x" && tabuleiro[8] == "x")||
        (tabuleiro[0] == "x" && tabuleiro[4] == "x" && tabuleiro[8] == "x")||
        (tabuleiro[2] == "x" && tabuleiro[4] == "x" && tabuleiro[6] == "x")){
        setTimeout(function () {
            document.getElementById("tabuleiro").style.display = "none"
            vitoria.style.display = "block"
            visor.innerHTML = `O ${nome1.value} ganhou!`
        }, 300)
    } else
    if((tabuleiro[0] == "o" && tabuleiro[3] == "o" && tabuleiro[6] == "o")||
       (tabuleiro[1] == "o" && tabuleiro[4] == "o" && tabuleiro[7] == "o")||
       (tabuleiro[2] == "o" && tabuleiro[5] == "o" && tabuleiro[8] == "o")||
       (tabuleiro[0] == "o" && tabuleiro[1] == "o" && tabuleiro[2] == "o")||
       (tabuleiro[3] == "o" && tabuleiro[4] == "o" && tabuleiro[5] == "o")||
       (tabuleiro[6] == "o" && tabuleiro[7] == "o" && tabuleiro[8] == "o")||
       (tabuleiro[0] == "o" && tabuleiro[4] == "o" && tabuleiro[8] == "o")||
       (tabuleiro[2] == "o" && tabuleiro[4] == "o" && tabuleiro[6] == "o")){
        setTimeout(function () {
            document.getElementById("tabuleiro").style.display = "none"
            vitoria.style.display = "block"
            visor.innerHTML = `O ${nome2.value} ganhou!`
        }, 300)
    }
}
