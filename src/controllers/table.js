import { Black } from "../model/Table/Black.js";
import { White } from "../model/Table/White.js";

export { GameControl }

class GameControl {

  static eixoX = ["A", "B", "C", "D", "E", "F", "G", "H"]
  static eixoY = [1, 2, 3, 4, 5, 6, 7, 8]
  static table = []
  static idCounter = 1
  static initialPositions = {
    whitePawn : [9, 10, 11, 12, 13, 14, 15, 16],
    whiteTower : [1, 8],
    whiteKnight : [2, 7],
    whiteBishop : [3, 6],
    whiteQueen : [4],
    whiteKing : [5],
    blackPawn : [49, 50, 51, 52, 53, 54, 55, 56],
    blackTower : [57, 64],
    blackKnight : [58, 63],
    blackBishop : [59, 62],
    blackQueen : [60],
    blackKing : [61]
  }

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
        /* console.log(`casa: ${colunaAtual}${linhaAtual} | X: ${indexX} Y: ${indexY} | ID: ${this.idCounter}`) */
        const casaDiv = document.createElement("div")

        const casa = this.classValidate(indexX, indexY, colunaAtual, linhaAtual)

        this.table.push(casa)
        casaDiv.classList.add(casa.classe)
        casaDiv.id = this.idCounter
        //teste de coordenadas abaixo
        //casaDiv.innerText = casa.id
        tabuleiro.insertBefore(casaDiv, tabuleiro.firstChild)
        this.idCounter++
      })
    })
    this.idCounter = 1
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
    

  }
      

}
