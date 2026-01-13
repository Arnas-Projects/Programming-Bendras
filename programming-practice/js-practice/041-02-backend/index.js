


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

    res.send('Green raccoon page');

});



// --------------------------------------------------
// Duomenų siuntimas su parametrais
// parametrai yra URL dalis
// :color yra kintamasis įdėtas į URL vietą
// app.get('/moose/:color', (req, res) => {
app.get('/:color/moose', (req, res) => {
    // iš URL paimame spalvos parametrą
    const mooseColor = req.params.color;
    
    res.send(`<h1 style="color:${mooseColor}"> Briedžio spalva yra: ${mooseColor}</h1>`);

});





// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, _ => {
    console.log(`Viskas OK. Serveris dirba ant ${port} porto`);
});




