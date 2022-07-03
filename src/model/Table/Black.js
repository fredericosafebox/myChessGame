import { Casa } from "./src/model/Table/Casa.js";

export class Black extends Casa {
    constructor (id, x, y) {
      super(id, x, y)
      this._cor = "#000"
    }
    
    get cor () { 
        return this._cor 
    }
    set cor (newCor) { 
        return this._cor = newCor 
    }

}