


const express = require('express');
const fs = require('fs'); // failų sistemos biblioteka
const app = express();
const port = 80;



// Dalis Router

app.get('/', (req, res) => {
    // req jau yra kaip objektas
    // res yra objektas, vėliau automatiškai verčiamas į stringą
    res.status(200).send('<h1>Labas, Barsukai! Ką tu?</h1>');
    // res.status(418).send('Kavos nebus');
});


app.get('/barsukas', (req, res) => {
    res.send('Barsuko puslapis');
});


app.get('/meska', (req, res) => {
    res.send('Meškos puslapis');
});


// URL su perduodamu parametru
app.get('/barsukas/:id', (req, res) => {
    const id = req.params.id; // params - raktinis žodis gauti parametrui
    res.send('Barsuko puslapis ' + id);
});

// app.get('/barsukas/2', (req, res) => {
//     res.send('Barsuko puslapis 2');
// });


app.get('/briedis', (req, res) => {
    // read file synchronously
    const data = fs.readFileSync('./html/briedis.html', 'utf8');
    res.send(data);
});




// ------------------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, () => {
    console.log(`Viskas OK. Barsukas dirba ant ${port} porto.`);
});


