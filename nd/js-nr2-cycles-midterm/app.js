


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}






// -----------------------------------------------------------------------------------------------------------------
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 
// liko nuvažiuoti 10 ratų. Suprogramuokite for ciklą, 
// kuris imituotų 10 ratų automobilio važiavimą ir kiekviename 
// cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui 
// nuvažiuoti. Paskutinis skaičius turėtų būti 1. 
// Visas rezultatas turėtų būti toks:  
// 10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).
console.log('Task 1');

let car = `Automobiliui Nr. 55 likęs nuvažiuoti ratų skaičius: `;

for (let i = 10; i > 0; i--) {
    console.log(`${car} ${i}`);
};



// -----------------------------------------------------------------------------------------------------------------
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 
// liko nuvažiuoti 10 ratų. Kiekvieną ratą automobilis važiuoja 
// skirtingu nuo 120 iki 220 km/h greičiu. Suprogramuokite for ciklą, 
// kuris imituotų 10 ratų automobilio važiavimą, rand() funkcija 
// generuokite atsitiktinį automobilio greitį o visiems ciklams 
// pasibaigus pateikite bendrą visų 10 ratų vidutinį greitį.
console.log('\nTask 2');

let AverageSpeed = 0;

const car2 = `Automobilio Nr. 55 greitis:`

for (let i = 10; i > 0; i--) {

    const speed = rand(120, 220);
    console.log(`${car2} ${i} rate: ${speed}`);

    AverageSpeed += speed / 10;
}

console.log(`\nVidutinis greitis:`, Number(AverageSpeed.toFixed(2)));



// -----------------------------------------------------------------------------------------------------------------
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 
// liko nuvažiuoti 10 ratų. Jo kuro bake liko 44 litrai kuro. 
// Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: 
// nuo 3 iki 6 litrų. Suprogramuokite for ciklą, kuris imituotų 10 
// ratų automobilio važiavimą, o ciklams pasibaigus pateikite išvadą 
// ar automobiliui užteko kuro įveikti visus 10 ratų. Kurui pasibaigus 
// ciklą nutraukite anksčiau laiko. 
console.log('\nTask 3');

let ConsumedFuel = 44;

const car3 = `automobilis sunaudojo:`;

for (let i = 10; i > 0; i--) {

    const fuel = rand(3, 6);
    console.log(`${i} rate ${car3} ${fuel} l. kuro`);

    ConsumedFuel -= fuel;

    if (ConsumedFuel <= 0) {
        console.log('Kuras baigėsi!');
        break;
    }
}

console.log('Liko kuro:', ConsumedFuel, 'ltr.');







// -----------------------------------------------------------------------------------------------------------------
// Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 
// liko nuvažiuoti 10 ratų (žiedų). Kiekviename žiede yra 5 posūkiai, 
// kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h. 
// Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 
// posūkiai) ir ciklams pasibaigus atspausdinkite mažiausią automobilio 
// greitį kažkuriame iš posūkių.
console.log('\nTask 4');

let saugiklis = 100;

let LowestSpeed = Infinity;

for (let i = 10; i > 0; i--) {

    for (let j = 1; j < 6; j++) {

        const turnSpeed = rand(20, 120);

        console.log(`\nRatas: %c${i}%c \nPosūkis: %c${j}%c \nGreitis posūkyje: %c${turnSpeed}%c km/h\n`, 
            'color: deeppink;', 'color: inherit;',
            'color: cyan;', 'color: inherit;',
            'color: greenyellow;', 'color: inherit;'
        );

        if (LowestSpeed > turnSpeed) {
            LowestSpeed = turnSpeed;
        }
    }
}

console.log('\nMažiausias greitis:', LowestSpeed);




// -----------------------------------------------------------------------------------------------------------------
// (BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 
// jose dalyvauja. Kiekviename kilometre gali atsitikti arba 
// neatsitikti rand(0, 1) tokie trys įvykiai: netikėtai iššokti - neiišokti 
// ant kelio kengūra, vairuotojas gali nespėti - spėti pasukti 
// vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius. 
// Imituokite tokią situaciją do while ciklu- vienas kilometras 
// vienas ciklo prasisukimas. Cikle rand() funkciją atsitiktinai
// generuokite visų įvykių tikimybę. Jeigu viename cikle įvyksta 
// visi nepalankūs įvykiai: iššoka kengūra, vairuotojas nespėja pasukti 
// vairo ir nespėja paspausti stabdžių while ciklą baikite. Ciklo pabaigoje 
// atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.
console.log('\nTask 5');


















