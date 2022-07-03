import { Casa } from "./Casa.js"

export class White extends Casa {
    constructor (id, x, y, nome) {
        super(id, x, y, nome)
        this._classe = "white"
    }

    get classe () { 
        return this._classe
    }
    set classe (newClasse) { 
        return this._classe = newClasse 
    }

 }