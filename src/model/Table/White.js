import { Casa } from "./src/model/Table/Casa.js";

export class White extends Casa {
    constructor (id, x, y) {
        super(id, x, y)
        this._cor = "#fff"
    }

    get cor () { 
        return this._cor 
    }
    set cor (newCor) { 
        return this._cor = newCor 
    }

 }