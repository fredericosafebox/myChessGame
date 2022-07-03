import { Black } from "../model/Table/Black.js";
import { White } from "../model/Table/White.js";

export { GameControl }

class GameControl {

    static eixoX = ["A", "B", "C", "D", "E", "F", "G", "H"]
    static eixoY = [8, 7, 6, 5, 4, 3, 2, 1]
    static table = []

    static createTable () {
        let idCounter = 1
        for (let i = 0; i < eixoY.length; i++) {
          let linhaAtual = eixoY[i]
          for (let j = 0; j < eixoX.length; j++) {
            let colunaAtual = eixoX[j]
            if (linhaAtual % 2 !== 0) {
              if (j % 2 !== 0) {
                let casa = new Black(idCounter, j, i)
                table.push()
              }
            }
            idCounter++
          }
        }
      }
      

}
