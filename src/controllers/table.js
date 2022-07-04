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
  static table = []
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
          console.log(`A peca selecionada foi: ${casaSelecionada.ocupante[0].nome}`)
        }
    } else {
        if (casaSelecionada.ocupante.length < 1) {
          casaSelecionada.ocupante.push(GameControl.selectedPiece[0].ocupante[0])
          GameControl.selectedPiece[0].ocupante.pop()
          GameControl.selectedPiece.pop()
          GameControl.atualizarTabuleiro()
        }
      }
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
      const pawn = new Pawn(cor)
      pawn.definirImagem()
      casaObj.ocupante.push(pawn)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.tower.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const tower = new Tower(cor)
      tower.definirImagem()
      casaObj.ocupante.push(tower)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.knight.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const knight = new Knight(cor)
      knight.definirImagem()
      casaObj.ocupante.push(knight)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.bishop.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const bishop = new Bishop(cor)
      bishop.definirImagem()
      casaObj.ocupante.push(bishop)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.queen.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const queen = new Queen(cor)
      queen.definirImagem()
      casaObj.ocupante.push(queen)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

    this.initialPositions.king.forEach(id => {
      let cor = ""
      id > 16 ? cor = "black" : cor = "white"
      const casaDiv = document.getElementById(id)
      const casaObj = this.table.filter(room => room.id == casaDiv.id)[0]
      const king = new King(cor)
      king.definirImagem()
      casaObj.ocupante.push(king)
      casaDiv.getElementsByTagName("img")[0].src = casaObj.ocupante[0].imagem
    })

  }

  
      

}
