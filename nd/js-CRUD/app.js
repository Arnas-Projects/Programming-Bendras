


/*
    Ganykla. Turim trijų rūšių gyvulius: avis, antis ir antilopes. 
    Kiekvienas gyvulys turi savo svorį. Parašyti localStorage CRUD
    aplikaciją, kurioje būtų galima pridėti naujus gyvulius su jų
    svoriais į ganyklą, ištrinti iš ganyklos ir redaguoti kiekvieno
    jų svorį.
*/


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


let animalsArray;
const RAKTAS = '_Ganykla';


const init = _ => {
    readLocalStorage();
    render();
    const createSelect = document.querySelector('[data-create-animal-select]');
    const createInput = document.querySelector('[data-create-animal-input]');
    const createButton = document.querySelector('[data-create-animal-button]');

    createButton.addEventListener('click', _ => {
        const animalName = createSelect.value;
        const animalWeight = createInput.value;
        Store(animalName, animalWeight);
        createInput.value = '';
        createSelect.value = '';
    });
}


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


const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
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

            const id = parseInt(e.target.dataset.id);
            Destroy(id);
        });


        /* *** EDIT *** */

        const editInput = rowHtml.querySelector('[data-edit-animal-input]');
        const editButton = rowHtml.querySelector('[data-edit-animal-button]');


        editInput.value = gyvunasItem.weight;
        editButton.dataset.id = gyvunasItem.id;

        editButton.addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            const weight = editInput.value;

            Update(id, weight);
        });



        animalName.innerText = `Gyvūnas: ${animalSelected(gyvunasItem.name)}, Svoris: ${(gyvunasItem.weight)} kg.`;

        animalsList.appendChild(rowHtml);
    });
};


const Store = (type, weight) => {
    const id = rand(10000000, 99999999);
    const dataToStore = {
        id,
        name: type,
        weight: weight
    }
    animalsArray.unshift(dataToStore);
    writeLocalStorage();
    render();
};


const Destroy = id => {
    animalsArray = animalsArray.filter(animal => animal.id != id);
    writeLocalStorage();
    render();
};


const Update = (id, data) => {
    animalsArray = animalsArray.map(item => item.id == id ?
        { ...item, weight: data } : item);
    writeLocalStorage();
    render();
};



init();









