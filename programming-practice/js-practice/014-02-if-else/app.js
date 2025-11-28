

//Kaip susikurti elementą:

// 1. naudokime innerHTML------------------------------------------------------------------------

const sekcija = document.querySelector('#nr1');

const divHtmlString = '<div class="circle1"></div>';

sekcija.innerHTML = divHtmlString;


const circle1 = document.querySelector('.circle1');

circle1.style.margin = '30px';
circle1.style.width = '300px';
circle1.style.height = '300px';
circle1.style.border = '3px solid white';
circle1.style.borderRadius = '50%';
circle1.innerText = 'Labas vakaras';

// 2. naudokime createElement------------------------------------------------------------------------

const sekcija2 = document.querySelector('#nr2');

const divCircle = document.createElement('div');

divCircle.style.margin = '30px';
divCircle.style.width = '300px';
divCircle.style.height = '300px';
divCircle.style.border = '3px solid white';
divCircle.style.borderRadius = '50%';
divCircle.innerText = 'Laba diena';

sekcija2.appendChild(divCircle);

// 3. Naudokime innerHTML sudėtingam html'ui

const sekcija3 = document.querySelector('#nr3');

const Bebras = 'Bebras';
const Iguana = 'Iguana';

const divukas = `
            <div class="fancy">
                <div class="fancy2">
                    <span>
                        <b>${Bebras}</b>
                        <i>${Iguana}</i>
                    </span>
                </div>
            </div>`;


sekcija3.innerHTML = divukas;



const namas1 = {}; //naujas tuščias objektas

namas1.langai = 3;
namas1.durys = 'Didelės';
namas1. arGeras = true;

namas1.kambariai = {};
namas1.kambariai.virtuve = '10m2';
namas1.kambariai.miegamasis = '30m2';

console.log (namas1);

const namas2 = {
    langai: 4,
    durys: 'Yra',
    arGeras: true,
    kambariai: {
        virtuve: '10m2',
        miegamasis: '30m2',
    }
};

console.log(namas2);

const b1 = {
    vardas: 'Jonas',
    metai: 20,
}

const b2 = {
    vardas: 'Jonas',
    metai: 20,
}

const b3 = b2; // priskyrimas by reference

if (b1 == b2) {
    console.log('Bebrai lygūs');
} else {
    console.log('Bebrai nelygūs');
}

if (b3 == b2) {
    console.log('Bebrai lygūs');
} else {
    console.log('Bebrai nelygūs');
}

b2.vardas = 'Petras';

console.log(b1, b2, b3);

const sk1 = 521;

const sk2 = sk1; // by value;


let rez;

if (5 > 10) {
    rez = 'TAIP';
} {
    rez = 'NE';
}

console.log(rez);















