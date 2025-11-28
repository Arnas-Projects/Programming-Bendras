


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}






console.log('labas')


const pasisveikinti = function() {
    console.log('Sveiki prisijungę');
}

pasisveikinti();

function pasisveikinti2(vardas) {
    console.log('Sveiki prisijungę ' + vardas);
}

pasisveikinti2('Aldona');

function pasisveikinti3(vardas) {
    console.log(`Sveiki prisijungę ${vardas}. Gerų pirkinių`);
}

pasisveikinti3('Aldona');



// Prisijungimas prie paskyros. 

// Patikrinti ar vartotojo vardas užregistruotas. Jei ne, konsolėje atspausdinti // "Toks vartotojas neegzistuoja"

// Patikrinti ar slaptažodis teisingas. Jei teisingas, konsolėje atspausdinti "Sveiki atvykę".

// Jei slaptažodis neteisingas, konsolėje atspausdinti "Slaptažodis ir vartotojo vardas neatitinka".

// Vartotojo vardas ir slaptažodis atsitiktinai yra true/false.

// Parašyti funkciją, kurį sukurtų ir patikrintų prisijungimo duomenis.
 

function paskyra() {
    let vartotojoVardas = rand(0, 1) ? true : false;
    console.log(`Vartotojo vardo reikšmė - ${vartotojoVardas}`);
    let slaptazodis = rand(0, 1) ? true : false;
    console.log(`Slaptažodžio reikšmė - ${slaptazodis}`);

    if (!vartotojoVardas) {
        console.log("Toks vartotojas neegzistuoja");
    } else {
        if(slaptazodis) {
            pasisveikinti();
        } else {
            console.log('Slaptažodis ir vartotojo vardas neatitinka');
        }
    }
}

paskyra();


const pilnametis = (amzius) => {
    if (amzius >= 18) {
        console.log('Žmogus pilnametis')
    } else {
        console.log('Nepilnametis');
    }
}

pilnametis(17);
pilnametis(18);


const pilnametis2 = amzius => (amzius >= 18) ? console.log('Žmogus pilnametis') : console.log('Nepilnametis');



pilnametis2(26);
pilnametis2(20);
pilnametis2(15);

console.log(`\n`)

const pilnametis3 = amzius => console.log((amzius >= 18) ? 'Žmogus pilnametis' : 'Nepilnametis');


pilnametis3(26);
pilnametis3(20);
pilnametis3(15);

const arLyginis = _ => (_ % 2 == 0) ? (console.log ('Lyginis')) : (console.log('nelyginis'));

arLyginis (12);
arLyginis (7);
arLyginis (4);

// deklaravom funkciją = parametras => (sąlyga, kurią tikrinom) ? (ką darom jei true) : (ką darom jei false);

console.clear();

function suma(a, b) {
    return a + b;
}

console.log(suma(2, 5));

const elektrosSkaitliukas = (sitoMen, praeitoMen) => {
    return ((sitoMen - praeitoMen) * 0.24).toFixed(2);
}

const elektraSpalis = elektrosSkaitliukas(123456, 123449);
console.log(elektraSpalis);

const elektraLapkritis = elektrosSkaitliukas(123700, 123456);
console.log(elektraLapkritis);

const elektraGruodis = elektrosSkaitliukas(124000, 123700);

console.log(elektraGruodis);



function KMI(s, u) {
    let ugis = Math.pow(u/100, 2);
    return (s / ugis).toFixed(1);
}

const Bronius = KMI(80, 180);
console.log(Bronius);

const funkcija1 = function(svoris, ugis) {
    return (svoris / ((ugis / 100)**2)).toFixed(1);
}


const AldonaKMI = funkcija1(78, 198);
console.log(AldonaKMI);

const PetroKMI = funkcija1(85, 190);
console.log(`Petro KMI ${PetroKMI}`);


const funkcija2 = function(x, y) {
    return x * y;
}
console.log(funkcija2(5, 5));

// Arrow
const funkcija3 = (x, y) => x * y
console.log(funkcija3(2, 5));

console.clear();

const funkcija4 = function(x, y) {
    return console.log(x * y);
}

funkcija4(5, 5);