import { Piece } from "./Piece.js"; 

export { Knight }

class Knight extends Piece {
    constructor (cor, x, y) {
        super(cor, x, y)
        this._imagem = ""
        this._nome = "Knight"
        this._directions = [
            "top-left",
            "top-right",
            "right-up",
            "right-down",
            "left-up",
            "left-down",
            "botton-right",
            "botton-left"
        ]
    }

    get imagem () {
        return this._imagem
    }
    set imagem (newImagem) {
        return this._imagem = newImagem
    }

    get nome () {
        return this._nome
    }

    set nome (newNome) {
        return this._nome = newNome
    }

    definirImagem () {
        switch (this.cor) {
            case "black":
                this.imagem = "./src/img/B_knight.png"
                break
            case "white":
                this.imagem = "./src/img/W_knight.png"
                break
        }
    }

    movimentos() {
        this.possibilidades = []
        this.directions.forEach(direction => {
            switch (direction) {
                case "top-left":
                    if  (this.x >= 1 && this.y <= 5) {
                        this.possibilidades.push({
                            x: this.x - 1,
                            y: this.y + 2
                        })
                    }
                    break
                 case "top-right":
                    if  (this.x <= 6 && this.y <= 5) {
                        this.possibilidades.push({
                            x: this.x + 1,
                            y: this.y + 2
                        })
                    }
                    break
                case "right-up":
                    if  (this.x <= 5 && this.y <= 6) {
                        this.possibilidades.push({
                            x: this.x + 2,
                            y: this.y + 1
                        })
                    }
                    break
                case "right-down":
                    if  (this.x <= 5 && this.y >= 1) {
                        this.possibilidades.push({
                            x: this.x + 2,
                            y: this.y - 1
                        })
                    }
                    break
                case "botton-right":
                    if  (this.x <= 6 && this.y >= 2) {
                        this.possibilidades.push({
                            x: this.x + 1,
                            y: this.y - 2
                        })
                    }
                    break
                case "botton-left":
                    if  (this.x >= 1 && this.y >= 2) {
                        this.possibilidades.push({
                            x: this.x - 1,
                            y: this.y - 2
                        })
                    }
                    break
                case "left-up":
                    if  (this.x >= 2 && this.y <= 6) {
                        this.possibilidades.push({
                            x: this.x - 2,
                            y: this.y + 1
                        })
                    }
                    break
                case "left-down":
                    if  (this.x >= 2 && this.y >= 1) {
                        this.possibilidades.push({
                            x: this.x - 2,
                            y: this.y - 1
                        })
                    }
                    break
            }
        })
        /* console.log(this.possibilidades) */
    }
    
}