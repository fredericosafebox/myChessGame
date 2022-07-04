import { Piece } from "./Piece.js"; 

export { Knight }

class Knight extends Piece {
    constructor (cor) {
        super(cor)
        this._imagem = ""
        this._nome = "Knight"
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
    
}