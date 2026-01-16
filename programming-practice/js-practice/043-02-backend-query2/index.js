


const express = require('express');
const fs = require('fs'); // failų sistemos modulis - biblioteka
const bodyParser = require('body-parser');
const app = express();
const port = 80;


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use(express.static('public'));



// Dalis Router
// ---------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {

    res.send('Launching Server! | Queries');

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


// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// ================ URL PARAMETRAI ================

// Duomenų siuntimas su PARAMETRAIS
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




// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// ================ URL QUERIES ================

// Duomenų siuntimas su QUERIES

/* 
    https://duckduckgo.com/?q=bebras&t=h_&ia=web

    parametrai yra URL dalis po ?
    parametras susideda iš kintamojo vardo ir reikšmės
    vardas rašomas prieš lygybės ženklą =
    reikšmė rašoma po lygybės ženklo =
    jei yra keli parametrai, jie atskiriami & ženklu

*/

// duomenų perdavimas su query (užklausos) parametrais
app.get('/query', (req, res) => {
    // paimame query parametrus iš req objekto
    const spalva = req.query.color; // pvz: /query?color=red
    const dydis = req.query.size; // pvz: /query?size=10
    res.send(`Spalva yra ${spalva}, dydis yra ${dydis}`);
});


app.get('/spalvos-dydis', (req, res) => {
    // paimame query kintamuosius iš req objekto

    //req.query - objektas, kuriame yra visi query kintamieji
    // req.query.color = paimame color kintamojo reikšmę
    const spalva = req.query.color;
    const dydis = req.query.size;
    const gyvunas = req.query.animal;
    res.send(`Spalva yra ${spalva}, dydis yra ${dydis}. Gyvūnas yra ${gyvunas}.`);
});


// Padaryti kalkuliatorių skaičiuotuvą sumai per URL skaičiuoti
// URL pvz: /suma/5/10 => turi parašyti "5 + 10 = 15"
app.get('/query-suma', (req, res) => {

    const pirmas = Number(req.query.num1);
    const antras = Number(req.query.num2);
    const suma = pirmas + antras;

    res.send(`Suma: ${pirmas} + ${antras} = ${suma}`);
});

http://localhost/query-suma/?num1=15&num2=21



// Padaryti kalkuliatorių skaičiuotuvą sumai per URL skaičiuoti
// url: pirmas skaičius kaip parametras, antras - kaip query kintamasis

app.get('/mixed-suma/:num1', (req, res) => {

    const number1 = Number(req.params.num1);
    const number2 = Number(req.query.num2);
    const suma = number1 + number2;

    res.send(`Pirmas: ${number1} | Antras: ${number2} | Suma: ${suma}`)
});



// ---------------------------------------------------------------------------------------------------------
// ================ QUERIES: PART 2 ================


app.get('/search', (req, res) => {
    const query1 = req.query.q;
    const query2 = req.query.q2;

    res.send(`You searched for: ${query1}. And another: ${query2}`);
});



// Padaryti kalkuliatorių skaičiuotuvą sumai su forma GET metodu skaičiuoti
// Formoje suvedame du skaičius
// atsidaro langas, kuriame turi parašyti "5 + 10 = 15"
app.get('/suma-submit', (req, res) => {
    const query1 = Number(req.query.num1);
    const query2 = Number(req.query.num2);
    const suma = query1 + query2;

    res.send(`Pirmas: ${query1} | Antras: ${query2} | Suma: ${suma}`);
});


// ----------------------------------------------------
// ========= POST metodas =========

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // Neteisingas variantas, nes po formos užpildymo reikia daryti redirect'ą
    // res.send(`Username: ${username}, Password: ${password}`);

    res.redirect('/ok');
});


app.get('/ok', (req, res) => {

    res.send('Login successful!');
});




// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, _ => {
    console.log(`Viskas OK. Serveris dirba ant ${port} porto`);
});




