import { Piece } from "./Piece.js"; 

export { Pawn }

class Pawn extends Piece {
    constructor (cor) {
        super(cor)
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
    
}