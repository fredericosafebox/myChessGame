import { Piece } from "./Piece.js"; 

export { Bishop }

class Bishop extends Piece {
    constructor (cor) {
        super(cor)
        this._imagem = ""
        this._nome = "Bishop"
    }

    get imagem () {
        return this._imagem
    }

    get nome () {
        return this._nome
    }

    set nome (newNome) {
        return this._nome = newNome
    }

    set imagem (newImagem) {
        return this._imagem = newImagem
    }
  
    definirImagem () {
        switch (this.cor) {
            case "black":
                this.imagem = "./src/img/B_bishop.png"
                break
            case "white":
                this.imagem = "./src/img/W_bishop.png"
                break
        }
    }
    
}