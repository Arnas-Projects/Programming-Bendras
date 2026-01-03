

import Ls from './Ls.js';


console.log('***** CRUD with OOP *****');


// Petriuko kodas - šitą kodą galima redaguot

let FutureObject;  // klasės Ls objektas (bus sukurtas)


const init = _ => {
    FutureObject = new Ls('x_colorStorage-OOP'); // FutureObject.list jau atsiranda kvadratukai su spalvom
    render(FutureObject.list);
    const createInput = document.querySelector('[data-create-color-input]');
    const createButton = document.querySelector('[data-create-color-button]');

    createButton.addEventListener('click', _ => {
        const color = createInput.value;
        const dataToStore = {
            color
        };
        FutureObject.Store(dataToStore);
        render(FutureObject.list); // LS.list jau yra pakeistas klasėje
    });
};


const render = list => {
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';

    list.forEach(colorItem => {
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
            FutureObject.Destroy(id);
            render(FutureObject.list);
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

            FutureObject.Update(id, dataToUpdate);
            render(FutureObject.list);
        });


        colorSq.style.backgroundColor = colorItem.color + '70'; // + permatomumas
        colorSq.style.borderColor = colorItem.color;

        listBin.appendChild(rowHtml);
    });
};


init();







