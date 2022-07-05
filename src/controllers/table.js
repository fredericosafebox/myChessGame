import { Black } from "../model/Table/Black.js";
import { White } from "../model/Table/White.js";

import { Pawn } from "../model/Pieces/Pawn.js";
import { Tower } from "../model/Pieces/Tower.js";
import { Knight } from "../model/Pieces/Knight.js";
import { Bishop } from "../model/Pieces/Bishop.js";
import { Queen } from "../model/Pieces/Queen.js";
import { King } from "../model/Pieces/King.js";

export { GameControl }



class GameControl {

  static eixoX = ["A", "B", "C", "D", "E", "F", "G", "H"]
  static eixoY = [1, 2, 3, 4, 5, 6, 7, 8]
  static table = [] //aqui ficam todas as instancias de casas de xadrez (id, x, y, nome)
  static idCounter = 1
  static initialPositions = {
    pawn : [9, 10, 11, 12, 13, 14, 15, 16, 49, 50, 51, 52, 53, 54, 55, 56],
    tower : [1, 8, 57, 64],
    knight : [2, 7, 58, 63],
    bishop : [3, 6, 59, 62],
    queen : [4, 60],
    king : [5, 61]
  }
  static selectedPiece = []
  static possibilidadesDeMovimento = []

  static newGame () {
    this.createTable()
    this.tableSetter()
  }
  
  static createTable() {
    //criar divs para casas
    //criar instancias de casas
    //mesmo id
    const tabuleiro = document.getElementById("table")
    this.eixoY.forEach((linhaAtual, indexY, arrayY) => {
      this.eixoX.forEach((colunaAtual, indexX, arrayX) => {
        // TESTE ABAIXO
        //console.log(`casa: ${colunaAtual}${linhaAtual} | X: ${indexX} Y: ${indexY} | ID: ${this.idCounter}`) 
        const casaDiv = document.createElement("div")
        const casaImg = document.createElement("img")
        casaDiv.appendChild(casaImg)

        const casa = this.classValidate(indexX, indexY, colunaAtual, linhaAtual)
        this.table.push(casa)
        
        casaDiv.classList.add(casa.classe)
        casaDiv.id = this.idCounter
        //teste de coordenadas abaixo
        //casaDiv.innerText = casa.id
        tabuleiro.insertBefore(casaDiv, tabuleiro.firstChild)

        casaDiv.addEventListener("click", (event) => this.selectActions(event))
        this.idCounter++
      })
    })
    this.idCounter = 1
  }

  static selectActions (event) {
    const casaSelecionada = GameControl.table.filter(casa => casa.id == event.currentTarget.id)[0]
  
    if (GameControl.selectedPiece.length < 1) {
      if (casaSelecionada.ocupante.length < 1) {
        console.log("casa sem ocupante")
      } else {
          GameControl.selectedPiece.push(casaSelecionada)
          //VALIDAR OS MOVIMENTOS DESSA CASA
          this.validarMovimento(GameControl.selectedPiece[0].ocupante[0])
          this.orientarJogador()
          console.log(`A peca selecionada foi: ${casaSelecionada.ocupante[0].nome}`)
        }
    } else {
      //antes de mover a peca, valido se o destino eh valido ou n
      if (GameControl.validarCasa(casaSelecionada) == true) {
        if (casaSelecionada.ocupante.length < 1) {
          //aqui eu coloco um novo ocupante na casa alvo
          casaSelecionada.ocupante.push(GameControl.selectedPiece[0].ocupante[0])
          //aqui eu atribuo ao novo ocupante da casa as coordenadas da nova casa
          casaSelecionada.ocupante[0].x = casaSelecionada.x
          casaSelecionada.ocupante[0].y = casaSelecionada.y
          //aqui eu  limpo o array de ocupantes da casa de onde o ocupante veio
          GameControl.selectedPiece[0].ocupante.pop()
          //aqui eu limpo o array de casas selecionadas
          GameControl.selectedPiece.pop()
          //aqui eu atualizo as imagens no tabuleiro de acordo com os ocupantes das casas
          GameControl.atualizarTabuleiro()
          // aqui desabilito as orientacoes pro jogador
          GameControl.atualizarClasses()
          GameControl.possibilidadesDeMovimento = []
        }
      } else {
        GameControl.selectedPiece.pop()
        GameControl.possibilidadesDeMovimento = []
        GameControl.atualizarClasses()
      }
        
      }
  }

  static orientarJogador () {
    //aqui pego todas as casas do tabuleiro (divs) e transformo em array
    const tabuleiro = document.getElementById("table")
    const todasAsDivs = Array.from(tabuleiro.getElementsByTagName("div"))

    //aqui destaco a casa da peca selecionada
    const divSelecionada = todasAsDivs.filter(div => GameControl.selectedPiece[0].id == div.id)[0]
    divSelecionada.classList.add("selecionado")

    //aqui eu seleciono as instancias de casas possiveis para jogar
    const casasPossiveis = []
    this.possibilidadesDeMovimento.forEach(objCoordenada => {
      const casaPossivel = this.table.filter(casa => casa.x == objCoordenada.x && casa.y == objCoordenada.y)[0]
      !casaPossivel.ocupante[0] ? casasPossiveis.push(casaPossivel) : "n deu"
    })

    //aqui eu seleciono as divs referentes as instancias de casas de xadrez
    const divsDeCasasPossiveis = []
    todasAsDivs.forEach(div => {
      casasPossiveis.forEach(casa => {
        if (div.id == casa.id) {
          divsDeCasasPossiveis.push(div)
        }
      })
    })
    //aqui eu altero a classe css para orientar o jogador sobre suas escolhas
    divsDeCasasPossiveis.forEach(div => {
      div.classList.add("possibilidade")
    })
    

  }

  static validarCasa(casaSelecionada) {
    const result = this.possibilidadesDeMovimento.filter(coordenada => coordenada.x == casaSelecionada.x && coordenada.y == casaSelecionada.y)
    if (result.length >= 1) {
      return true
    }
    return false
  }

  static validarMovimento (ocupante) {
    //aqui eu calculo as possibilidades de movimento da selectedPiece
    ocupante.movimentos()
    //aqui eu uso spread para enviar para a central de controle todas as possibilidades do movimento da selectedPiece ja calculadas
    GameControl.possibilidadesDeMovimento.push(...ocupante.possibilidades)
    //descomente para testar as possibilidades de movimento
    //console.log(`Piece: ${ocupante.nome} \nPossibilidades: ${ocupante.possibilidades[0].x}, ${ocupante.possibilidades[0].y} `)
  }

  static atualizarTabuleiro () {
    const tabuleiro = document.getElementById("table")
    const casas = Array.from(tabuleiro.getElementsByTagName("div"))
    
    casas.forEach(casaDiv => {
      const imagem = casaDiv.getElementsByTagName("img")[0]
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      casaObj.ocupante.length == 1 ? imagem.src = casaObj.ocupante[0].imagem : imagem.removeAttribute("src")
    })
  }

  static atualizarClasses() {
    const tabuleiro = document.getElementById("table")
    const todasAsDivs = Array.from(tabuleiro.getElementsByTagName("div"))
    todasAsDivs.forEach(div => {
      div.classList.remove("possibilidade")
      div.classList.remove("selecionado")
    })
  }

  static classValidate (indexX, indexY, colunaAtual, linhaAtual) {
    const nome = `${colunaAtual}${linhaAtual}`
    if (indexY % 2 == 0) {
      if (indexX % 2 == 0) {
        const result = new Black(this.idCounter, indexX, indexY, nome)
        return result
      } else {
        const result = new White(this.idCounter, indexX, indexY, nome)
        return result
      }
    } else {
      if (indexX % 2 == 0) {
        const result = new White(this.idCounter, indexX, indexY, nome)
        return result
      } else {
        const result = new Black(this.idCounter, indexX, indexY, nome)
        return result
      }
    }
  }

  static tableSetter () {
    
    this.initialPositions.pawn.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const pawn = new Pawn(cor, casaObj.x, casaObj.y)
      pawn.definirImagem()
      //Abaixo um teste de coordenadas
      //console.log(`Piece: ${pawn.nome} | Cor: ${pawn.cor} | Imagem: ${pawn.imagem} | X: ${pawn.x} | Y: ${pawn.y}`)
      casaObj.ocupante.push(pawn)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.tower.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const tower = new Tower(cor, casaObj.x, casaObj.y)
      tower.definirImagem()
      casaObj.ocupante.push(tower)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.knight.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const knight = new Knight(cor, casaObj.x, casaObj.y)
      knight.definirImagem()
      casaObj.ocupante.push(knight)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.bishop.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const bishop = new Bishop(cor, casaObj.x, casaObj.y)
      bishop.definirImagem()
      casaObj.ocupante.push(bishop)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.queen.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const queen = new Queen(cor, casaObj.x, casaObj.y)
      queen.definirImagem()
      casaObj.ocupante.push(queen)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.king.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const king = new King(cor, casaObj.x, casaObj.y)
      king.definirImagem()
      casaObj.ocupante.push(king)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

  }

  
      

}
