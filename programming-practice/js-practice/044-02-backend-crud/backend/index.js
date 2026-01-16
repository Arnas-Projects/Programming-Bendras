


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
    
    console.log('Gauti naujos prekės duomenys', newItem);

    // Perskaitom esamus duomenis iš failo (sinchroniškai iš products.json)

    // const productsData = fs.readFileSync('products.json', 'utf-8');
    // const products = JSON.parse(productsData);

    res.send({ message: 'Nauja prekė sukurta sėkmingai', item: newItem });

});









// ------------------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, _ => {
    console.log(`Viskas OK. Back-end CRUD Express js dirba ant ${port} porto.`);
});


