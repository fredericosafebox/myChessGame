export { Piece }

class Piece {
    constructor (cor) {
        this._cor = cor
    }

    get cor () {
        return this._cor
    }
    set cor (novaCor) {
        return this._cor = novaCor
    }
}