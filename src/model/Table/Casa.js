export class Casa {
    constructor (id, x, y){
      this._id = id
      this._x = x
      this._y = y
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
    
    set id (novoId) { 
        return this._id = novoId 
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
  }
  