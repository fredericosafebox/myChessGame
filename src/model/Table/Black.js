import { Casa } from "./Casa.js"

export class Black extends Casa {
    constructor (id, x, y, nome) {
      super(id, x, y, nome)
      this._classe = "black"
    }
    
    get classe () { 
        return this._classe
    }
    set classe (newClasse) { 
        return this._classe = newClasse 
    }

}