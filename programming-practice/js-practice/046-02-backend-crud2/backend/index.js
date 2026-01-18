


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


// Prekės trynimas pagal ID
app.delete('/items/:id', (req, res) => { // turim URL su parametro id, kuris yra produkto id
    // setTimeout(_ => {
    const id = req.params.id; // imame id iš url. // Jeigu id būtų skaičius, reikėtų naudoti parseInt(req.params.id);
    const productsData = fs.readFileSync('products.json', 'utf-8'); // skaitome failą kaip tekstą
    let products = JSON.parse(productsData); // konvertuojam tekstą į JavaScript masyvą
    products = products.filter(product => product.id !== id); // filtruojam prekes, paliekam tik tas kurios neturi trynimo id
    fs.writeFileSync('products.json', JSON.stringify(products, null, 2)); // išsaugom atnaujintą prekių masyvą atgal į products.json failą

    res.send({
        message: 'Item deleted successfully',
        status: 'Success'
    });
    // }, 3000); // dirbtinis vėlinimas 3 sekundėmis
});


// Prekės atnaujinimas pagal ID
app.put('/items/:id', (req,res) => {

    const id = req.params.id; // paimam id iš URL, kad žinotume, kurią prekę atnaujinti
    const updatedItem = req.body; // gaunam atnaujintus duomenis iš užklausos body
    const productsData = fs.readFileSync('products.json', 'utf-8'); // skaitom failą kaip tekstą
    let products = JSON.parse(productsData); // konvertuojam tekstą į JavaScript masyvą
    // einam per visas prekes ir randam tą, kurią reikia atnaujinti
    products = products.map(product => {
        if (product.id === id) {
            // grąžinam atnaujintą prekę
            return {
                ...product, // išskleidžiam esamus prekės duomenis
                ...updatedItem, // išskleidžiam atnaujintus duomenis (jie užrašys esamus)
                id: id // užtikrinam, kad ID nepasikeis
            };
        }
        return product; // grąžinam nepakeistą prekę
    });
    // Išsaugom atnaujintą prekių masyvą atgal į products.json failą
    fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
    res.send({
        message: 'Item updated successfully',
        status: 'Success'
    });
});







// ------------------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, _ => {
    console.log(`Viskas OK. Back-end CRUD Express js dirba ant ${port} porto.`);
});


