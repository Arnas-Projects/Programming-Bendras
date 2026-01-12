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
  let productsData = fs.readFileSync('products.json', 'utf-8');
  const products = JSON.parse(productsData);
  products.push(newItem);
  productsData = JSON.stringify(products, null, 2);
  fs.writeFileSync('products.json', productsData);
  res.send({ message: 'Nauja prekė sukurta sėkmingai', item: newItem });

});



app.listen(port, () => {
  console.log(`Viskas gerai. CRUD dirba ant ${port} porto`);
});


