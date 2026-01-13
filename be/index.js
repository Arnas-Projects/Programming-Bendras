const express = require('express');
const fs = require('fs'); // failų sistemos modulis-biblioteka
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const port = 80;


// formuoja atsakymą su CORS antraštėmis
app.use(cors());

// Gaunam visų prekių duomenis
app.use(bodyParser.json());


// Naujos prekės kūrimas
app.post('/items', (req, res) => {
  // Gaunam naujos prekės duomenis iš užklausos kūno
  const newItem = req.body;
  // console.log('Gauti naujos prekės duomenys:', newItem);
  const id = uuidv4(); // Sukuriam unikalų ID pagal laiką
  newItem.id = id;

  console.log('Gauti naujos prekės duomenis:', newItem);

  // Perskaitom esamus duomenis iš failo (sinchroniškai iš products.json)

  // skaitom failą kaip tekstą
  let productsData = fs.readFileSync('products.json', 'utf-8');
  // verčiam tekstą į JS objektą (masyvą)
  const products = JSON.parse(productsData);
  products.push(newItem);
  // productsData = JSON.stringify(products, null, 2);
  // fs.writeFileSync('products.json', productsData);

  // Išsaugom atnaujintą prekių masyvą atgal į products.json failą
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));

  res.send({
    message: 'New item created successfully',
    status: 'success',
    item: newItem
  }); // siunčiame objekta, kuris yra verčiamas į JSON formato tekstą

});


// -------------------------------------------------------------------------------------------------------------
// Visų prekių gavimas
app.get('/items', (req, res) => {
  // skaitom failą kaip tekstą
  const productsData = fs.readFileSync('products.json', 'utf-8');
  // konvertuojam tekstą į JavaScript masyvą
  const products = JSON.parse(productsData);
  // siunčiame objektą, kuris yra verčiamas į JSON formato tekstą
  res.send({
    message: 'Items retrieved successfully',
    status: 'success',
    items: products
  });
});





// -------------------------------------------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Viskas gerai. CRUD dirba ant ${port} porto`);
});


