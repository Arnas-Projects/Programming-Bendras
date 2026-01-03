


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



const manoSkaicius = rand(1, 10);

console.log(`Sugeneruotas skaicius: ${manoSkaicius}`);

// localStorage.setItem('skaicius', manoSkaicius);  // padedu skaičių į storage



const gautasSkaicius = localStorage.getItem('skaicius');
console.log(`Gautas skaičius: ${gautasSkaicius}`, typeof gautasSkaicius);


const bebras = {
    name: 'Bebras',
    age: 11
};

localStorage.setItem('animal', bebras);  // ===> [object Object] "suplotas objektas", gauname kai objektą paverčiame į stringą

const gautasBebras = localStorage.getItem('animal');
console.log(`Gautas gyvūnas: ${gautasBebras}`);


const bebrasStringas = JSON.stringify(bebras);  // prieš įrašant verčiame į json
localStorage.setItem('animal2', bebrasStringas);  // užsaugom

const gautasBebrasObj = localStorage.getItem('animal2');  // gaunam atgal užsaugotą json "stringą"

const bebroObjektas = JSON.parse(gautasBebrasObj); // iš json "stringo" vėl gauname objektą

// console.log(`Gautas: ${bebroObjektas}`);

console.log(bebroObjektas.name);  // naudojame


const nr1 = document.querySelector('#nr1');

nr1.addEventListener('click', _ => {
    localStorage.setItem('skaicius', manoSkaicius);
});


// "mano_skaiciai"

// informacijos vizualus atvaizdavimas vadinamas renderinimu

const renderList = _ => {
    const olas = document.querySelector('ol');
    olas.innerHTML = '';  // išvalau ol elementą
    daugSkaiciu.forEach(sk => {
        const li = document.createElement('li');
        li.innerText = sk;
        olas.appendChild(li);
    });
};



let daugSkaiciu;

daugSkaiciu = localStorage.getItem('mano_skaiciai');  // bandom paimti skaičius iš local storage

if (null === daugSkaiciu) {
    // jeigu local storage neturi tokio įrašo (pradžia)
    daugSkaiciu = [];
} else {
    daugSkaiciu = JSON.parse(daugSkaiciu);  // tai ką radau, paverčiu į objektą
}


console.log(daugSkaiciu);



const nr2 = document.querySelector('#nr2');

nr2.addEventListener('click', _ => {
    daugSkaiciu.push(manoSkaicius);  // pridedu į sąrašą
    const daugSkaiciuStringas = JSON.stringify(daugSkaiciu);  // paverčiu stringu
    localStorage.setItem('mano_skaiciai', daugSkaiciuStringas);
    renderList();  // šitas renderina kekvieną kartą paspaudus mygtuką
});

renderList();  // šitas renderina pradžioje, refreshinus puslapį


/*
    Yra trys mygtukai: žalias, mėlynas ir raudonas. Paspaudus vieną iš mygtukų jo spalva įsirašo
    į localStorage. Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai
*/






