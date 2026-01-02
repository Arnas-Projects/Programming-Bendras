

import { v4 as uuidV4 } from 'uuid';


console.log('***** CRUD with OOP *****');


/*
    Naujo pridėjimas

    Create - vaizdas
    Store - veiksmas
*/


let LIST;
const KEY = 'x_colorStorage-OOP';


const init = _ => {
    readLocalStorage();
    render();
    const createInput = document.querySelector('[data-create-color-input]');
    const createButton = document.querySelector('[data-create-color-button]');

    createButton.addEventListener('click', _ => {
        const color = createInput.value;
        const dataToStore = {
            color
        };
        Store(dataToStore);
    });
};


const render = _ => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';

    LIST.forEach(colorItem => {
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const colorSq = rowHtml.querySelector('[data-color-sq]');

        /* *** DELETE *** */

        const deleteButton = rowHtml.querySelector('[data-delete-sq]');

        // colorItem.id sugeneruotas Store metode id
        // dataset.id // į elementą prideda atributą "data-id"
        // dataset.id = colorItem.id  // atributui priskiria reikšmę data-id="213153425"
        deleteButton.dataset.id = colorItem.id;

        deleteButton.addEventListener('click', e => {

            // e eventas
            // e.target iš evento gautas paspaustas mygtuko elementas
            // e.target.dataset kreipimasis į elemento "data-" atributus
            // e.target.dataset.id kreipimasis į atributą "data-id"

            const id = e.target.dataset.id;
            Destroy(id);
        });


        /* *** EDIT *** */

        const editInput = rowHtml.querySelector('[data-edit-color-input]');
        const editButton = rowHtml.querySelector('[data-edit-color-button]');

        editInput.value = colorItem.color; // senų duomenų perrašymas į edit formą
        editButton.dataset.id = colorItem.id;

        editButton.addEventListener('click', e => {
            const id = e.target.dataset.id;
            const color = editInput.value;

            const dataToUpdate = {
                color
            };

            Update(id, dataToUpdate);
        });


        colorSq.style.backgroundColor = colorItem.color + '70'; // + permatomumas
        colorSq.style.borderColor = colorItem.color;

        listBin.appendChild(rowHtml);
    });
};


//* ***** CRUD CODE ***** *//


const readLocalStorage = _ => {
    let data = localStorage.getItem(KEY);

    // ALTERNATYVA su ternary metodu
    // null === data ? LIST = [] : LIST = JSON.parse(data);

    if (null === data) {
        LIST = [];
    } else {
        LIST = JSON.parse(data);
        
    }
};


const writeLocalStorage = _ => {
    let data = JSON.stringify(LIST);
    localStorage.setItem(KEY, data);
};


/*
    Store vyko naujo "daikto" įrašymą į saugyklą
    Turi gauti tą "daiktą"
    Turi "daiktui" priskirti ID ir įrašyti į saugyklą
*/


const Store = data => {
    const id = uuidV4();
    const dataToStore = {
        ...data,
        id
    }
    LIST.unshift(dataToStore);
    writeLocalStorage();
    render();
};


/*
    Destroy vykdo "daikto" pašalinimą iš saugyklos
    Šis metodas turi gauti "daikto" identifikatorių
    Turi pašalinti "daiktą" su nurodytu identifikatoriumi
*/

const Destroy = id => {
    LIST = LIST.filter(item => item.id != id);
    writeLocalStorage();
    render();
};


/* 
    Update vykdo redaguoto "daikto" saugojimą saugykloje
    Turi gauti "daikto" identifikatorių ir "daikto" naujas savybes
    Turi iš naujo išsaugoti daiktą su nurodytu identifikatoriumi ir naujom savybėm 
*/


const Update = (id, data) => {
    LIST = LIST.map(item => item.id == id ? {...item, ...data, id} : item);
    writeLocalStorage();
    render();
};



init();







