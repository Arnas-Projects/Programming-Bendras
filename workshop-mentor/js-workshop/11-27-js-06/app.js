


let daugyba = 0;

function result(x, y) {
    daugyba = x * y;
    return x * y;
}

console.log(result(5, 10));
console.log(daugyba);

function hello() {
    console.log('Hello');
}

hello();

console.log('Task #2');

// 2. Atspausdinti bet kokį skaičių
// Sukurti funkciją, kuri atspausdina perduotą (kaip argumentas) skaičių.
console.log('Task #2');


const funkcija1 = function(sk1) {
    console.log(sk1);
}

funkcija1(3);



// 3. Sudėti du skaičius
// Sukurti funkciją sum(a, b), kuri grąžina a + b rezultatą.

const funkcija2 = function(a, b) {
    return console.log(a + b);
}

funkcija2(5, 10);


// 4. Padidinti skaičių
// Sukurti funkciją padidinti(num), kuri grąžina skaičių, padidintą +10.

const padidinti = function(num) {
    return (num + 10)
}

console.log(padidinti(4));


// 5. Sujungti du žodžius tarpu
// Sukurti funkciją sujungti(a, b), kuri grąžina tekstą „a - b“.
// (Galima naudoti " " tiesiog kaip tekstą. Jokių metodų.)
console.log('Task #5');

function sujungti (a,b) {
    return a + " ~ " + b
}

console.log(sujungti('Labas', 'Rytas'))

// 6. Grąžinti tą pačią reikšmę
// Sukurti funkciją, kuri atspausdina konsolėje tą patį, kas perduota.

const funkcija3 = function(parametras) {
    console.log(parametras);
}
 
funkcija3('Sveiki');


// 7. Sukurti „prisistatymą“

// Sukurti funkciją prisistatymas(vardas), kuri grąžina:

// „Mano vardas VARDAS“ (vietoj VARDAS įrašyti perduotą argumentą).
 
function funkcija4(vardas) {
    return 'Mano vardas: ' + vardas
}
console.log(funkcija4('Arnas'));



const funkcija5 = (vardas) => 'Mano vardas yra: ' + vardas;

console.log(funkcija5('Arnas'));

//8.Pakėlimas kvadratu
// Sukurti funkciją square(x), kuri grąžina x * x.
console.log('Task #8');

const funkcija6 = function(x) {
    return x * x
}

console.log(funkcija6(5));

const funkcija7 = x => x * x;

console.log(funkcija7(3));


// 9. Grąžinti dvigubą tekstą
// Sukurti funkciją dvigubasTekstas(text), kuri grąžina text + text.

const funkcija8 = text => text + ' ' + text;

console.log(funkcija8('labas '))


const funkcija9 = function(text) {
    return text + '' + text
};

console.log(funkcija8('tekstas'))


// 10. Paversti skaičių neigiamu
// Sukurti funkciją makeNegative(num), kuri grąžina skaičių -num.

const makeNegative = function(num) {
    return -num;
};

console.log(makeNegative(10));







