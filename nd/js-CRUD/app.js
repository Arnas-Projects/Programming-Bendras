


/*
    Ganykla. Turim trijų rūšių gyvulius: avis, antis ir antilopes. 
    Kiekvienas gyvulys turi savo svorį. Parašyti localStorage CRUD
    aplikaciją, kurioje būtų galima pridėti naujus gyvulius su jų
    svoriais į ganyklą, ištrinti iš ganyklos ir redaguoti kiekvieno
    jų svorį.
*/


const animalSelected = gyvunas => {

    if (gyvunas == 'avis') {
        return 'Avis';
    } else if (gyvunas == 'antis') {
        return 'Antis';
    } else if (gyvunas == 'antilope') {
        return 'Antilopė';
    }
};


let animalsArray;
const RAKTAS = '_Ganykla';

const init = _ => {
    readLocalStorage();
    render();
    const createSelect = document.querySelector('[data-create-animal-select]');
    const createInput = document.querySelector('[data-create-animal-input]');
    const createButton = document.querySelector('[data-create-animal-button]');

    createButton.addEventListener('click', _ => {
        const animalWeight = createInput.value;
        Store(animalWeight);
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


        animalName.innerText = animalSelected();

        animalsList.appendChild(rowHtml);
    });
};


const Store = data => {
    const id = rand(10000000, 99999999);
    const dataToStore = {
        id,
        weight: data
    }
    animalsArray.unshift(dataToStore);
    writeLocalStorage();
    render();
};

init();









