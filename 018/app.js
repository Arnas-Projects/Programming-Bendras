function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




console.log('Hello, Mr. Loop');

// Duotas žodis "Meškėnas". Reikia konsolėje atskirai atspausdinti po vieną visas raides
 
// const word = 'rabarbaras';

// let found = '"r" raidė nerasta';
// let count = 0;

// for (let i = 0; i < word.length; i++) {
//     if (word[i] == 'r') {
//         found = `"r" rasta ${i} vietoje`; // užrašas ${i} NIEKO BENDRO su ciklu neturi
//     }
// }


// const zodelis = "Meskenas";
// let out = '';

// // let skaiciuojam = 0;

// for(let i = 0; i < zodelis.length; i++) {
//     console.log(zodelis[i]);
//     out += zodelis[i] + '\n';
// }

// console.log(out);
// console.clear();
//----------------------------------------------------------------------------------------------------------
// let divukas = document.querySelector('div');
// divukas.innerText = out;
// divukas.style.color = 'white';

const zodelis = 'Bebras'

const bodziukas = document.querySelector('body');

for (let i = 0; i < zodelis.length; i++) {
    const divukas = document.createElement('div');
    divukas.innerText = zodelis[i];
    bodziukas.appendChild(divukas);
    bodziukas.style.color = 'white';
}



// let number1;


// do {
//     number1 = rand(0, 10);
//     console.log(number1);

// } while (number1 > 5);


// Sakykime, kad metame monetą ir ji gali iškristi H, kaip herbas arba S, kaip skaičius. Tam panaudojame
// rand funkciją

// let coin = rand(0, 1) ? 'H' : 'S';

// // console.log(coin);

// // Mesti monetą, kol iškris H t.y. herbas

// let coin2;

// do {
//     coin2 = rand(0, 1) ? 'H' : 'S';
//     console.log (coin2);
// } while (coin2 > 5);

// let coin;

// do {
//     coin = rand(0, 1) ? 'H' : 'S';
//     console.log (coin);
// } while(coin != 'H');


/*

    == <---> !=
    > <---> <=
    < <---> >=
    || <---> &&

*/

console.clear();


let times = 0;

let saugiklis = 100;


do {

    let times = 0;
    coin = rand(0, 1) ? 'H' : 'S';
    console.log (coin);
    if (coin == 'H') {
        times++;
    }

    saugiklis--;
    if (!saugiklis) {
        console.log('Suveikė saugiklis');
        break;
    }

} while (times < 3);

