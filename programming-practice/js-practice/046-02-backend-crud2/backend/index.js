


const express = require('express');
const fs = require('fs'); // failų sistemos modulis - biblioteka
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidV4 } = require('uuid');
const port = 80;

// ------------------------------------------------------------------------------------------------------------------

// Formuoja atsakymą su CORS antraštėmis
app.use(cors());

// Gaunam visus prekių duomenis
app.use(bodyParser.json());

// ------------------------------------------------------------------------------------------------------------------


// Naujos prekės kūrimas
app.post('/items', (req, res) => {
    // Gaunam naujos prekės duomenis iš užklausos body
    const newItem = req.body;
    // console.log('Gauti naujos prekės duomenys', newItem);
    // const id = Date.now(); // Sukuriam unikalų ID pagal laiką
    const id = uuidV4(); // Sukuriam unikalų ID pagal UUID

    newItem.id = id;

    // console.log('Gauti naujos prekės duomenys', newItem);

    // Perskaitom esamus duomenis iš failo (sinchroniškai iš products.json)

    // Skaitom failą kaip tekstą
    const productsData = fs.readFileSync('products.json', 'utf-8');
    // verčiam tekstą į JS objektą (masyvą)
    const products = JSON.parse(productsData);
    // Pridedam naują prekę į esamų prekių masyvą
    products.push(newItem);
    // Išsaugom atnaujintą prekių masyvą atgal į products.json failą
    fs.writeFileSync('products.json', JSON.stringify(products, null, 2));

    // Siunčiame objektą, kuris yra verčiamas į JSON formato tekstą
    res.send({
        message: 'Nauja prekė sukurta sėkmingai',
        status: 'Success',
        item: newItem
    });

});


// Visų prekių gavimas
app.get('/items', (req, res) => {

    // Skaitom failą kaip tekstą
    const productsData = fs.readFileSync('products.json', 'utf-8');
    // Konvertuojam tekstą į JS masyvą
    const products = JSON.parse(productsData);
    // siunčiame objektą, kuris yra verčiamas į JSON formato tekstą

    res.send({
        message: 'Item retrieved successfully',
        status: 'Success',
        items: products
    });
});









// ------------------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, _ => {
    console.log(`Viskas OK. Back-end CRUD Express js dirba ant ${port} porto.`);
});


