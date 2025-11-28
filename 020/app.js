


const animals = [];

animals.push('Zuikis', 'Bebras', 'Barsukas');

console.log(animals);

animals.unshift('Briedis', 'Mamutas'); // indeksai persiskaičiuoja

console.log(animals);

animals.pop(); // išmeta paskutinį elementą, tik vieną

console.log(animals);

animals.shift(); // išmeta pirmą elementą, (tik vieną)

console.log(animals);

const pushResult = animals.push('Vilkas'); // grąžina masyvo dydį su pridėtais elementais

console.log(pushResult, animals);

const popResult = animals.pop();

console.log(animals);
console.log(popResult);

/*
Paieška
Agregaciją
Filtracija
Rūšiavimas
*/

const numbers = [54, 85, 31, -4, 57, 131, -78, 54, 54, 798, 0, 3, 74];

// Paieška

let findWhat = 54;
let findRow = 2; // kelinto rezultato mums reikia

let findResultIndex = -1; // rasto skaičiaus indeksas. -1 reiškia, kad indekso dar neradom
let findResultRow = 0;

for (let i = 0; i < numbers.length; i++) {
    if (findWhat == numbers[i]) {

        findResultRow++;

        if(findRow == findResultRow) {
            findResultIndex = i;
            break; // nutraukia ciklą ir iš jo išeina
        }
    }
}

console.clear();

console.log(findResultIndex);


const listas = document.querySelectorAll('body > ol > li');
let meska = -1;

console.log(Array.from(listas).map(el => el.innerText));


    //listas ---> visi elementai
    //listas[i] ---> konkretus vienas elementas
    //listas[i].innerText ---> konkretaus vieno elemento tekstas1

for (let i = 0; i < listas.length; i++) {
    if (listas[i].innerText == 'Meška') {


        meska = i; // meska gauna elemnto indeksą
        break; // einam lauk iš ciklo
    }
}

console.log ('Meška', meska + 1) // +1 pakoreguojam indeksą, kad jis taptų eilės numeriu

// let varna = -1;

for (let i = 0; i < listas.length; i++) {
    if (listas[i].innerText == 'Varna') {
        // varna = i;
        listas[i].style.color = 'crimson';
        break;
    }
}


// Sąraše visus išskyrus Pelėdą ir Gaidį nuspalvinti orange

for (let i = 0; i < listas.length; i++) {

    if (listas[i].innerText == 'Pelėda' || listas[i].innerText == 'Gaidys') {
        continue;  // pradeda naują iteraciją (ciklo prasukimą) toliau +1
    }
    listas[i].style.color = 'orange';
}

// for (let i = 0; i < listas.length; i++) {

//     if (listas[i].innerText != 'Pelėda' && listas[i].innerText != 'Gaidys') {
//     listas[i].style.color = 'orange';
//     }
  
// }












