
import { v4 as uuidv4 } from 'uuid';

class Ls {

    constructor(key) {
        this.key = key;  // prisimenam key
        this.readLocalStorage();  // paleidžiam metodą
    }

    readLocalStorage = _ => {
        let data = localStorage.getItem(this.key);
        if (null === data) {
            this.list = [];
        } else {
            this.list = JSON.parse(data);
        }
    }

    writeLocalStorage = _ => {
        let data = JSON.stringify(this.list);
        localStorage.setItem(this.key, data);
    }



    /*
        Store funkcija vyko naujo "daikto" įrašymą į saugyklą
        Turi gauti tą "daiktą"
        Turi "daiktui" priskirti ID ir įrašyti į saugyklą
    */


    Store = data => {
        // const id = rand(10000000, 99999999);  // netikras unikalus id
        const id = uuidv4();
        const dataToStore = {
            ...data,
            id // ===> supaprastintas id: id - kadangi vardas ir reikšmė toks pats
        }
        this.list.unshift(dataToStore);  // pakeičia listą
        this.writeLocalStorage();
    };


    Destroy = id => {
        this.list = this.list.filter(item => item.id != id);  // išmetam iš listo kvadratuką su nurodytu id
        this.writeLocalStorage();
    };


    /*
        Update() vykdo redaguoto "daikto" saugojimą saugykloje
        Šis metodas turi gauti "daikto" indentifikatorių (id) ir "daikto" naujas savybes
        Turi persaugoti "daiktą" su nurodytu (id) ir naujomis savybėmis
    */

    Update = (id, data) => {
        this.list = this.list.map(item => item.id == id ? { ...item, ...data, id } : item);
        this.writeLocalStorage();
    };
};


export default Ls;  // išeksportuojam