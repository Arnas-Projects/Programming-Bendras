

import { v4 as uuidV4 } from 'uuid';


//* ***** CRUD CODE ***** *//


// Programavo Marytė - Nelyst prie kodo - kodas UNIVERSALUS CRUD

class OopCRUD {

    constructor(raktas) {
        this.key = raktas;
        this.readLocalStorage();
    }

    readLocalStorage = _ => {
        let data = localStorage.getItem(this.key);

        if (null === data) {
            this.list = [];
        } else {
            this.list = JSON.parse(data);
        }
    };


    writeLocalStorage = _ => {
        let data = JSON.stringify(this.list);
        localStorage.setItem(this.key, data);
    };


    Store = (type, weight) => {
        const id = uuidV4();
        const dataToStore = {
            ...type,
            ...weight,
            id
        }
        this.list.unshift(dataToStore);
        this.writeLocalStorage();
    };


    Destroy = id => {
        this.list = this.list.filter(element => element.id != id);
        this.writeLocalStorage();
    };


    Update = (id, data) => {
        this.list = this.list.map(item => item.id == id ? { ...item, ...data, id } : item);
        this.writeLocalStorage();
    };
}




export default OopCRUD; // eksportuojam failą Ls.js
