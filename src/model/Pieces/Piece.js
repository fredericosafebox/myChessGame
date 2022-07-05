export { Piece }

class Piece {
    constructor (cor, x, y) {
        this._cor = cor
        this._x = x
        this._y = y
        this._directions = []
        this._possibilidades = []
    }

    get cor () {
        return this._cor
    }
    set cor (novaCor) {
        return this._cor = novaCor
    }

    get x () {
        return this._x
    }
    set x (novoX) {
        return this._x = novoX
    }

    get y () {
        return this._y
    }
    set y (novoY) {
        return this._y = novoY
    }

    get directions () {
        return this._directions
    }

    set directions (newDirections) {
        return this._directions = newDirections
    }

    get possibilidades () {
        return this._possibilidades
    }

    set possibilidades (newPossibilidades) {
        return this._possibilidades = newPossibilidades
    }
}