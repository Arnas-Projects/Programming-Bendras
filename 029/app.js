


console.log('Laba diena');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const manoSkaicius = rand(1, 10);
console.log(`Sugeneruotas skaicius: ${manoSkaicius}`);

// localStorage.setItem('skaicius', manoSkaicius);  // padedu skaičių į storage

const gautasSkaicius = localStorage.getItem('skaicius');
console.log(`Gautas skaicius: ${gautasSkaicius}`);


// ---------------------------- !! DĖMESIO !! ------------------------------
// localStorage mes galime saugoti TIK TAI STRINGUS
// visi skaiciai esantys localStorage automatiškai paverčiami į stringą


const bebras = {
    name: 'bebras',
    age: 11
};

localStorage.setItem('animal', bebras); //  ===> [object Object] "suplotas objektas" kai objektas yra paverčiamas į stringą


const bebrasStringas = JSON.stringify(bebras);  // prieš įrašant verčiame į JSON formatą

localStorage.setItem('animal2', bebrasStringas); //  užsaugome


const gautasBebras = localStorage.getItem('animal2'); // tada gauname atgal užsaugotą JSON

console.log(gautasBebras.name, typeof gautasBebras);


const bebroObject = JSON.parse(gautasBebras);  // iš JSON vėl gauname objektą

console.log(bebroObject, typeof bebroObject, bebroObject.name, typeof bebroObject.name);



const nr1 = document.querySelector('#nr1');

nr1.addEventListener('click', _ => {
    localStorage.setItem('skaicius', manoSkaicius);
});


// El. parduotuvės krepšelio LOCAL STORAGE veikimo principas. PAVYZDYS:

// informacijos vizualus atvaizdavimas vadinamas renderinimu

const renderList = _ => {

    const olTag = document.querySelector('ol');
    olTag.innerHTML = '';  // išvalau ol elementą

    daugSkaiciu.forEach(skaicius => {

        const liTag = document.createElement('li');
        liTag.innerText = skaicius;
        olTag.appendChild(liTag);
    });
};


let daugSkaiciu;

daugSkaiciu = localStorage.getItem('mano_skaiciai');

console.log(daugSkaiciu);

if (null === daugSkaiciu) {
    // jeigu local storage neturi tokio įrašo (pradžia)
    daugSkaiciu = [];
} else {
    daugSkaiciu = JSON.parse(daugSkaiciu);  // tai ką radau, paverčiu į objektą
}

console.log(daugSkaiciu);

let belekas = 2 + 2;

const nr2 = document.querySelector('#nr2');

nr2.addEventListener('click', _ => {

    daugSkaiciu.push(manoSkaicius);  // pridedu į sąrašą
    const daugSkaiciuStringas = JSON.stringify(daugSkaiciu);
    localStorage.setItem('mano_skaiciai', daugSkaiciuStringas);
    renderList();  // šitas renderina kiekvieną kartą paspaudus mygtuką
});

console.log(daugSkaiciu);

renderList();  // šitas renderina pradžioje refreshinus puslapį


/*

    Yra trys mygtukai: žalias, mėlynas ir raudonas. Paspaudus vieną iš mygtukų jo spalva įsirašo
    į localStorage. Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai

*/

// Ryt bus tema apie CRUD





