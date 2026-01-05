
import OopCRUD from './Ls.js';


/*
    Ganykla. Turim trijų rūšių gyvulius: avis, antis ir antilopes. 
    Kiekvienas gyvulys turi savo svorį. Parašyti localStorage CRUD
    aplikaciją, kurioje būtų galima pridėti naujus gyvulius su jų
    svoriais į ganyklą, ištrinti iš ganyklos ir redaguoti kiekvieno
    jų svorį.
*/






// Petriuko kodas - šitą kodą galima redaguoti

let FutureObject;


const init = _ => {
    FutureObject = new OopCRUD('w_Ganykla_OOP');
    render(FutureObject.list);
    const createSelect = document.querySelector('[data-create-animal-select]');
    const createInput = document.querySelector('[data-create-animal-input]');
    const createButton = document.querySelector('[data-create-animal-button]');

    createButton.addEventListener('click', _ => {
        const animalName = createSelect.value;
        const animalWeight = createInput.value;

        const dataToStore = {
            animalName,
            animalWeight
        };

        FutureObject.Store(dataToStore);
        createInput.value = '';
        createSelect.value = '';
        render(FutureObject.list);
    });
}



const render = arrayList => {
    const animalsList = document.querySelector('[data-animals-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    animalsList.innerHTML = '';

    arrayList.forEach(gyvunasItem => {
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const animalName = rowHtml.querySelector('[data-animal-name]');


        /* *** DELETE *** */

        const deleteButton = rowHtml.querySelector('[data-delete-animal]');

        deleteButton.dataset.id = gyvunasItem.id;

        deleteButton.addEventListener('click', e => {

            const id = e.target.dataset.id;
            FutureObject.Destroy(id);
            render(FutureObject.list);
        });


        /* *** EDIT *** */

        const editInput = rowHtml.querySelector('[data-edit-animal-input]');
        const editButton = rowHtml.querySelector('[data-edit-animal-button]');


        editInput.value = gyvunasItem.animalWeight;
        editButton.dataset.id = gyvunasItem.id;

        editButton.addEventListener('click', e => {
            const id = e.target.dataset.id;
            const animalWeight = editInput.value;

            const dataToUpdate = {
                animalWeight
            };

            FutureObject.Update(id, dataToUpdate);
            render(FutureObject.list);
        });


 
        animalName.innerText = `Gyvūnas: ${animalSelected(gyvunasItem.animalName)}, Svoris: ${(gyvunasItem.animalWeight)} kg.`;

        animalsList.appendChild(rowHtml);
    });
};


// const animalSelected = gyvunas => {

//     if (gyvunas == 'avis') {
//         return 'Avis';
//     } else if (gyvunas == 'antis') {
//         return 'Antis';
//     } else if (gyvunas == 'antilope') {
//         return 'Antilopė';
//     }
// };


const animalSelected = gyvunas => ({

    avis: 'Avis',
    antis: 'Antis',
    antilope: 'Antilopė'

} [gyvunas]);



init();









