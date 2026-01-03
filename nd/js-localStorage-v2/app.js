


/*
    Yra trys mygtukai: žalias, mėlynas ir raudonas. Paspaudus vieną iš mygtukų jo spalva įsirašo
    į localStorage. Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai
*/



const renderList = _ => {
    const olTag = document.querySelector('ol');
    olTag.innerHTML = '';

    spalvuMasyvas.forEach(kvadratas => {
        const liTag = document.createElement('li');
        liTag.style.width = '50px';
        liTag.style.height = '50px';
        liTag.style.borderRadius = '10px';
        liTag.style.backgroundColor = kvadratas;
        olTag.appendChild(liTag);
    });

};


let spalvuMasyvas;

spalvuMasyvas = localStorage.getItem('x_Spalvu_palete');

if (null === spalvuMasyvas) {
    spalvuMasyvas = [];
} else {
    spalvuMasyvas = JSON.parse(spalvuMasyvas);
};

console.log(spalvuMasyvas);

const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');
const redButton = document.querySelector('.red');
const deleteButton = document.querySelector('.delete');


greenButton.addEventListener('click', _ => {
    spalvuMasyvas.push('green');
    const spalvuMasyvasStringas = JSON.stringify(spalvuMasyvas);
    localStorage.setItem('x_Spalvu_palete', spalvuMasyvasStringas);
    renderList();
});


blueButton.addEventListener('click', _ => {
    spalvuMasyvas.push('royalblue');
    const spalvuMasyvasStringas = JSON.stringify(spalvuMasyvas);
    localStorage.setItem('x_Spalvu_palete', spalvuMasyvasStringas);
    renderList();
});


redButton.addEventListener('click', _ => {
    spalvuMasyvas.push('crimson');
    const spalvuMasyvasStringas = JSON.stringify(spalvuMasyvas);
    localStorage.setItem('x_Spalvu_palete', spalvuMasyvasStringas);
    renderList();
});

deleteButton.addEventListener('click', _ => {

    // ČIA IŠTRYNIMAS KARTU SU RAKTU

    // localStorage.removeItem('x_Spalvu_palete');
    // location.reload();

    // ČIA TRYINIMAS PALIEKANT RAKTĄ localStorage
    if (spalvuMasyvas) {
        // spalvuMasyvas = spalvuMasyvas.filter(spalva => spalva != spalva);
        spalvuMasyvas = [];
    }

    localStorage.setItem('x_Spalvu_palete', JSON.stringify(spalvuMasyvas));
    // alert('Local Storage cleared!');
    renderList();
});


renderList();



