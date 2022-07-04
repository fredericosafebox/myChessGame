export { Casa }


class Casa {
    constructor (id, x, y, nome){
      this._id = id
      this._x = x
      this._y = y
      this._nome = nome
      this._ocupante = []
    }
    get id () { 
        return this._id 
    }
    get ocupante () { 
        return this._ocupante 
    }
    get x () { 
        return this._x 
    }
    get y () { 
        return this._y 
    }

    get nome () { 
        return this._nome
    }
    
    set id (novoId) { 
        return this._id = Number(novoId) 
    }
    set ocupante (novoOcupante) { 
        return this._ocupante = novoOcupante 
    }
    set x (newX) { 
        return this._x = newX 
    }
    set y (newY) { 
        return this._y = newY 
    }
    set nome (newNome) { 
        return this._nome = newNome
    }
  }
  