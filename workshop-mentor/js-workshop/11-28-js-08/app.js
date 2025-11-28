


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




console.log('JS workshop 11.28');
//Task #1 -------------------------------------------------------------------------


function funkcija1(parametras) {
    'kodas';
}

const funkcija2 = function (parametras) {
    'kodas';
}

const funkcija3 = (parametras) => { 'kodas' };

const funkcija4 = () => 'kodas';

if ('salyga') {
    'ką darom jei salyga true';
} else {
    'ką darom, jei salyga false';
}

function funkcija5(parametras) {
    if ('salyga') {
        'ką darom jei salyga true, pvz console.log()';
    } else {
        'ką darom, jei salyga false, pvz return grazina kazkokia reiksme';
    }
}

funkcija1();
console.log(funkcija4()); // return rez matysim konsolėj

// 1. Patikrinti ar skaičius teigiamas
// Sukurti funkciją, kuri gauna skaičių (kaip argumentą) ir:
// išspausdina konsolėje „Teigiamas“ arba „Neigiamas“


//Task #1 -------------------------------------------------------------------------
// 1. Patikrinti ar skaičius teigiamas
// Sukurti funkciją, kuri gauna skaičių (kaip argumentą) ir:
// išspausdina konsolėje „Teigiamas“ arba „Neigiamas“

console.log('\nTask #1');

const funkcija6 = function(sk1) {
    if (sk1 > 0) {
        console.log(sk1, 'Teigiamas');
    } else if (sk1 ==0) {
        console.log(sk1, 'Nulis');
    } else{
        console.log(sk1, 'Neigiamas');
    }
}

funkcija6(8);
funkcija6(0);
funkcija6(-7);


//Task #2 -------------------------------------------------------------------------
// 2. Patikrinti slaptažodį
// Jei slaptažodis yra „labas“ , spausdinam konsolėje -  „Teisingas“
// Kitu atveju - „Neteisingas“

console.log('\nTask #2');

const funkcija7 = function(x) {
    if (x == 'labas') {
        console.log('Teisingas');
    } else {
        console.log('Neteisingas');
    }
}

funkcija7('labas');

// arrow funkcija
const funkcija8 = (x) => console.log(x == 'labas' ? 'Teisingas' : 'Neteisingas');

funkcija8('labas');


//Task #3 -------------------------------------------------------------------------
// 3. Temperatūros tikrinimas. Sukurti funkciją
// Jei temp > 20 , spausdinam konsolėje - „Šilta“
// Kitu atveju - „Vėsu“

console.log('\nTask #3');

const temp = function(celsius) {
    if (celsius > 20) {
        console.log('Šilta');
    } else {
        console.log('Vėsu');
    }
}

temp(21);


//Task #4 -------------------------------------------------------------------------
// 4. Sukurti funkciją kuri patikrintų ar vardas lygus „Jonas“. Sukurti funkciją
// Jei vardas "Jonas" spausdinam konsolėje - „Labas, Jonai!“
// Kitu atveju  -  „Sveiki.“
 

console.log('\nTask #4');

const funkcija9 = function(vardas) {
    if (vardas == 'Jonas') {
        console.log('Labas, Jonai!');
    } else {
        console.log('Sveiki.');
    }
}

funkcija9('Jonas');
funkcija9('Ne Jonas');

//Task #5 -------------------------------------------------------------------------
// 5. Sukurti funkciją kuri patikrintų ar skaičius didesnis už 100.
// Jei >= 100 = „Daug!“
// Kitu atveju = „Mažai.“

console.log('\nTask #5');

const funkcija10 = function(num) {
    if (num >= 100) {
        console.log('Daug');
    } else {
        console.log('Mažai');
    }
}

funkcija10(101);

const funk11 = (num) => console.log(num >= 100 ? 'Daug' : 'Mažai');

funk11(99);
funk11(100);
funk11(110);


//Task #6 -------------------------------------------------------------------------
// 6. Sukurti funkciją kuri patikrintų ar tekstas yra tuščias
// Jei textas yra  "" - „Tuščia“
// Kitu atveju - „Yra tekstas“

console.log('\nTask #6');

const funk12 = function(text) {
    if (text == '') {
        console.log('Tuščia');
    } else {
        console.log('Yra tekstas');
    }
}

funk12('Labas');

const funk13 = (text) => console.log(text == '' ? 'Tuščia' : 'Yra tekstas');
funk13('');
funk13('Sveiki');


//Task #7 -------------------------------------------------------------------------
// Petras ir Birutė ridena kauliuką. 
// Parašyti funkciją, kuri sukurtų ir konsolėje atspausdintų išridentus skaičius.
// Parašytų kas nugalėjo.
 

console.log('\nTask #7');

const ridenam = function() {
    let biruteRidena = rand(1, 6);
    let petrasRidena = rand(1, 6);

    if (biruteRidena > petrasRidena) {
        console.log('Birutės rez:', biruteRidena, 'Petro rez:', petrasRidena, '\nBirutė Win!');
    } else if (biruteRidena == petrasRidena) {
        console.log('Birutės rez:', biruteRidena, 'Petro rez:', petrasRidena, '\nLygiosios!');
    } else {
        console.log('Birutės rez:', biruteRidena, 'Petro rez:', petrasRidena, '\nPetras Win!');
    }
}

ridenam();
 
//Task #9 -------------------------------------------------------------------------
//Užduotis:
//Parašykite funkciją, kurį gauna krepšelio sumą ir kliento tipą ir grąžina galutinę kainą:
// Klientas "bazinis:  nuolaidos nėra
// Klientas "vip" -  20% nuolaida
// Klientas "darbuotojas" -  30% nuolaida
 
console.log('\nTask #9');

const kainosPaskaiciavimas = (krSuma, klientoTipas) => {
    if (klientoTipas === 'bazinis') {
        return krSuma;
    } else if (klientoTipas === 'vip') {
        return krSuma * 0.8;
    } else if (klientoTipas === 'darbuotojas') {
        return krSuma * 0.7;
    }
    return krSuma;
}

console.log(kainosPaskaiciavimas(100, 'bazinis'));
console.log(kainosPaskaiciavimas(100, 'vip'));
console.log(kainosPaskaiciavimas(100, 'darbuotojas'));
console.log(kainosPaskaiciavimas(100, 'akcija'));

const manoKrepselis = kainosPaskaiciavimas(10, 'vip');

console.log(100 - manoKrepselis);

const manoKaipVIPKr = kainosPaskaiciavimas(10, "vip");
let manoDraugesKaipDar = kainosPaskaiciavimas(120, "darbuotojas");
console.log(200 - manoKaipVIPKr - manoDraugesKaipDar);















