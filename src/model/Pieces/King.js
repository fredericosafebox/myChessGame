import { Piece } from "./Piece.js"; 

export { King }

class King extends Piece {
    constructor (cor, x, y) {
        super(cor, x, y)
        this._imagem = ""
        this._nome = "King"
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
                this.imagem = "./src/img/B_king.png"
                break
            case "white":
                this.imagem = "./src/img/W_king.png"
                break
        }
    }
    
}