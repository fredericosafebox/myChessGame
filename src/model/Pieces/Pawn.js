import { Piece } from "./Piece.js"; 

export { Pawn }

class Pawn extends Piece {
    constructor (cor, x, y) {
        super(cor, x, y)
        this._imagem = ""
        this._nome = "Pawn"
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
                this.imagem = "./src/img/B_pawn.png"
                break
            case "white":
                this.imagem = "./src/img/W_pawn.png"
                break
        }
    }

    movimentos() {
        this.possibilidades = []
        this.cor == "black" ? this.directions.push("botton") : this.directions.push("top")
        this.directions.forEach(direction => {
            switch (direction) {
                case "top":
                    if (this.y == 1) {
                        this.possibilidades.push({
                            x: this.x,
                            y: this.y + 2
                        })
                    }
                    if (this.y < 7) {
                        this.possibilidades.push({
                            x: this.x,
                            y: this.y + 1
                        })
                    }
                    break
                case "botton":
                    if (this.y == 6) {
                        this.possibilidades.push({
                            x: this.x,
                            y: this.y - 2
                        })
                    }
                    if (this.y > 0) {
                        this.possibilidades.push({
                            x: this.x,
                            y: this.y - 1
                        })
                    }
                    break
            }
        })
        /* console.log(this.possibilidades) */
    }
    
}