
import { v4 as uuidV4 } from 'uuid';

/*
    Ganykla. Turim trijų rūšių gyvulius: avis, antis ir antilopes. 
    Kiekvienas gyvulys turi savo svorį. Parašyti localStorage CRUD
    aplikaciją, kurioje būtų galima pridėti naujus gyvulius su jų
    svoriais į ganyklą, ištrinti iš ganyklos ir redaguoti kiekvieno
    jų svorį.
*/



let animalsArray;
const RAKTAS = '_Ganykla_Node-JS';


const init = _ => {
    readLocalStorage();
    render();
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

        Store(dataToStore);
        createInput.value = '';
        createSelect.value = '';
    });
}



const render = _ => {
    const animalsList = document.querySelector('[data-animals-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    animalsList.innerHTML = '';

    animalsArray.forEach(gyvunasItem => {
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const animalName = rowHtml.querySelector('[data-animal-name]');


        /* *** DELETE *** */

        const deleteButton = rowHtml.querySelector('[data-delete-animal]');

        deleteButton.dataset.id = gyvunasItem.id;

        deleteButton.addEventListener('click', e => {

            const id = e.target.dataset.id;
            Destroy(id);
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

            Update(id, dataToUpdate);
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




//* ***** CRUD CODE ***** *//




const readLocalStorage = _ => {
    let data = localStorage.getItem(RAKTAS);

    if (null === data) {
        animalsArray = [];
    } else {
        animalsArray = JSON.parse(data);
    }
};


const writeLocalStorage = _ => {
    let data = JSON.stringify(animalsArray);
    localStorage.setItem(RAKTAS, data);
};


const Store = (type, weight) => {
    const id = uuidV4();
    const dataToStore = {
        ...type,
        ...weight,
        id
    }
    animalsArray.unshift(dataToStore);
    writeLocalStorage();
    render();
};


const Destroy = id => {
    animalsArray = animalsArray.filter(element => element.id != id);
    writeLocalStorage();
    render();
};


const Update = (id, data) => {
    animalsArray = animalsArray.map(item => item.id == id ? { ...item, ...data, id } : item);
    writeLocalStorage();
    render();
};



init();









