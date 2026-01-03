
import { v4 as uuidV4 } from 'uuid';



// Programavo Marytė - Nelyst prie kodo - kodas UNIVERSALUS CRUD
class Ls {

    constructor(key) {
        this.key = key;  // prisimenam key
        this.readLocalStorage();  // paleidžiam metodą readLocalStorage
    }

    readLocalStorage = _ => {
        let data = localStorage.getItem(this.key);

        // ALTERNATYVA su ternary metodu
        // null === data ? this.list = [] : this.list = JSON.parse(data);

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


    /*
        Store vyko naujo "daikto" įrašymą į saugyklą
        Turi gauti tą "daiktą"
        Turi "daiktui" priskirti ID ir įrašyti į saugyklą
    */


    Store = data => {
        const id = uuidV4();
        const dataToStore = {
            ...data,
            id
        }
        this.list.unshift(dataToStore); // pakeičia listą
        this.writeLocalStorage();
    };


    /*
        Destroy vykdo "daikto" pašalinimą iš saugyklos
        Šis metodas turi gauti "daikto" identifikatorių
        Turi pašalinti "daiktą" su nurodytu identifikatoriumi
    */

    Destroy = id => {
        this.list = this.list.filter(item => item.id != id);
        this.writeLocalStorage();
    };


    /* 
        Update vykdo redaguoto "daikto" saugojimą saugykloje
        Turi gauti "daikto" identifikatorių ir "daikto" naujas savybes
        Turi iš naujo išsaugoti daiktą su nurodytu identifikatoriumi ir naujom savybėm 
    */


    Update = (id, data) => {
        this.list = this.list.map(item => item.id == id ? { ...item, ...data, id } : item);
        this.writeLocalStorage();
    };
}


export default Ls; // eksportuojam failą Ls.js