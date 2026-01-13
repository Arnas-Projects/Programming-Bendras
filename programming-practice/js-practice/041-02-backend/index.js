


const express = require('express');
const fs = require('fs'); // failų sistemos modulis - biblioteka
const app = express();
const port = 80;


// Dalis Router
// ---------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {

    res.send('Launching Server!');

});


app.get('/about', (req, res) => {

    res.send('About Page');

});


app.get('/about/raccoon/green', (req, res) => {

    res.send('Green raccoon page');

});





app.get('/url-symbols', (req, res) => {

    const symbols = ['!-----@-----#-----$-----%-----^-----&-----?-----=----- '];

    const encodedSymbols = encodeURIComponent(symbols);

    res.send('Decoded symbols: ' + decodeURIComponent(encodedSymbols) +
        '<br>' + 'Encoded symbols: ' + encodedSymbols
    );

});



// --------------------------------------------------
// Duomenų siuntimas su parametrais
// parametrai yra URL dalis
// :color yra kintamasis įdėtas į URL vietą
app.get('/moose/:color', (req, res) => {
    // app.get('/:color/moose', (req, res) => {
    // iš URL paimame spalvos parametrą
    const mooseColor = req.params.color; // spalva yra automatiškai URL dekoduojamas

    res.send(`<h1 style="color:${mooseColor}"> Briedžio spalva yra: ${mooseColor}</h1>`);

});



app.get('/kas/:vardas/amzius/:kiek', (req, res) => {

    const name = req.params.vardas;
    const age = req.params.kiek;
    res.send(`Mano vardas ${name}. Man yra: ${age} metų`);

});


// -------------------------------------------------------------------
// Padaryti kalkuliatorių skaičiuotuvą sumai per URL skaičiuoti
// URL pvz: /suma/5/10 => turi parašyti "5 + 10 = 15"

app.get('/suma/:num1/:num2', (req, res) => {

    // const pirmas = +req.params.num1; // alternatyva kaip stringą galima paversti skaičiumi
    // const antras = +req.params.num2; // alternatyva kaip stringą galima paversti skaičiumi
    const pirmas = Number(req.params.num1);
    const antras = Number(req.params.num2);
    const suma = pirmas + antras;
    res.send(`Suma: ${pirmas} + ${antras} = ${suma}`);

});


// -------------------------------------------------------------------
// Padaryti didesnio skaičiaus radimą per URL
// pvz: /didesnis/5/10  => turi parašyti "Didesnis skaičius yra 10"

app.get('/didesnis/:num1/:num2', (req, res) => {

    const pirmas = Number(req.params.num1);
    const antras = Number(req.params.num2);

    let didesnis;

    
    // Vartotojo įvestos informacijos validacija (tikrinimas)

    if (isNaN(pirmas) || isNaN(antras)) {
        res.send(`Tai nėra skaičiai`);
        return;
    }

    // Alternatyva su TERNARY
    // pirmas > antras ? didesnis = pirmas : didesnis = antras;


    if (pirmas > antras) {
        didesnis = pirmas;
    } else if (pirmas < antras) {
        didesnis = antras;
    } else if (pirmas == antras) {
        res.send(`${pirmas} | ${antras} | Skaičiai yra lygūs`);
        return;
    }

    res.send(`${pirmas} | ${antras} | Didesnis yra: ${didesnis}`);

});







// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, _ => {
    console.log(`Viskas OK. Serveris dirba ant ${port} porto`);
});




