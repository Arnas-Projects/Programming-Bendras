const express = require('express');
const fs = require('fs'); // failų sistemos modulis-biblioteka
const app = express();
const port = 80;


// Dalis Router
app.get('/', (req, res) => {
  res.send('Hello Raccoon!');
});


app.get('/about', (req, res) => {
  res.send('About page');
});


app.get('/about/raccoon/green', (req, res) => {
  res.send('Green raccoon about page');
});


app.get('/url-symbols', (req, res) => {

  const symbols = '!--@--#--$--%--^--&--?--=-- ';

  const encodedSymbols = encodeURIComponent(symbols);

  res.send('Original symbols: ' + symbols + '<br>' +
    'Encoded symbols: ' + encodedSymbols + '<br>' +
    'Decoded symbols: ' + decodeURIComponent(encodedSymbols)
  );
});



// app.get('/kas/:vardas/kiek/:amzius', (req, res) => {
//     const vardas = req.params.vardas;
//     const amzius = req.params.amzius;
//     res.send('Sveikas ' + vardas + '. Tavo amžius yra ' + amzius);
// });


app.get('/kas/:vardas/kiek/:amzius', (req, res) => { // nustatome url struktūrą su dviem parametrais
  const vardas = req.params.vardas;
  // req - tai objektas, kuriame yra visa info apie užklausą
  // req.params - tai objektas, kuriame yra visi parametrai iš URL
  // req.params.vardas - paimame vardas parametrą iš URL. Parametrai visada yra tekstinio tipo (string)
  const amzius = req.params.amzius;
  // pradedame klijuoti atsakymą:
  res.send('Sveikas ' + vardas + '. Tavo amžius yra ' + amzius);
  // res - tai objektas, kuriame yra visa info apie atsakymą
  // res.send() - metodas, kuris siunčia atsakymą į naršyklę
  // res.send('tekstas') - siunčia tekstą į naršyklę
});



app.get('/suma/:skaicius1/:skaicius2', (req, res) => {

  // const pirmas = parseFloat(req.params.skaicius1);
  // const antras = parseFloat(req.params.skaicius2);
  const pirmas = Number(req.params.skaicius1);
  const antras = Number(req.params.skaicius2);
  const suma = pirmas + antras;
  // res.send('Suma: ' + suma);
  res.send(`${pirmas} + ${antras} = ${suma}`); // Galime siųsti tik vieną daiktą
});

// ----------------------------------------------------------------------------------------------------
// Parašyti kodą dviejų skaičių sumai

app.get('/didesnis/:sk1/:sk2', (req, res) => {
  const first = Number(req.params.sk1);
  const second = Number(req.params.sk2);
  const didesnis = Math.max(first, second);

  // Vartotojo įvestos informacijos validacija (tikrinimas)

  if (isNaN(first) || isNaN(second)) { // tikriname ar abu parametrai yra skaičiai
    res.send('Klaida: abu parametrai turi būti skaičiai');
    return; // baigiame funkcijos vykdymą
  }

  res.send(`${first} ir ${second} | Didesnis yra: ${didesnis}`);
});

// SU TERNARY
app.get('/bigger/:sk1/:sk2', (req, res) => {

  const num1 = parseFloat(req.params.sk1);
  const num2 = parseFloat(req.params.sk2);
  const bigger = Math.max(num1, num2);

  isNaN(num1) || isNaN(num2) ? res.send('Klaida: tai nėra skaičiai') : res.send(`${num1} ir ${num2} | Didesnis yra: ${bigger}`);


});

// SU PAPRASTU IF'u
app.get('/didesnis-skaicius/:num1/:num2', (req, res) => {

  const number1 = Number(req.params.num1);
  const number2 = Number(req.params.num2);
  
  let didesnis;

  if (number1 > number2) {
    didesnis = number1;
  } else {
    didesnis = number2;
  }

  res.send(`Pirmas skaičius: ${number1} | Antras skaičius: ${number2} | Didesnis yra: ${didesnis}`);
});

// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------



// ALTERNATYVA - dėstytojo
app.get('/didesnis/:skaicius1/:skaicius2', (req, res) => {
  const skaicius1 = parseFloat(req.params.skaicius1); // paverčiame tekstą į skaičių
  const skaicius2 = parseFloat(req.params.skaicius2); // paverčiame tekstą į skaičių
  let didesnis; // kintamasis didesniam skaičiui saugoti
  if (skaicius1 > skaicius2) { // tikriname kuris skaičius didesnis
    didesnis = skaicius1; // priskiriame didesnį skaičių kintamajam
  } else {
    didesnis = skaicius2; // priskiriame didesnį skaičių kintamajam
  }

  res.send(`Didesnis skaičius yra ${didesnis}`); // siunčiame atsakymą su didesniu skaičiumi
});



// const liko = Math.max(0, this.keleiviuSkaicius - keleiviuSkaicius);

// duomenų perdavimas su parametrais
// parametrai yra URL dalis
// :color yra kintamasis idėtas į URL vietą
app.get('/raccoon/:color', (req, res) => {

  // iš URL paimame spalvos parametrą
  // color yra kintamasis, įdėtas į URL vietą
  const raccoonColor = req.params.color;

  res.send('<h1 style="color:' + raccoonColor + '" ' + '>This racoon is ' + raccoonColor + '</h1>');
});


// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
  console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});


