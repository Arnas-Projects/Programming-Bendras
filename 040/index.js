const express = require('express');
const fs = require('fs'); // failų sistemos modulis
const app = express();
const port = 80;

// importuojam service duomenis
const { services } = require('./services');

// Failai folderyje 'public' bus pasiekiami per naršyklę
app.use(express.static('public')); // Nurodome, kad statiniai failai bus iš 'public' folderio




// Dalis Router
// HOME PAGE
app.get('/', (req, res) => {

  // read file synchronously
  // skaitome tris atskirus failus
  // Toks skaitymas galimas tik backend'e
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const home = fs.readFileSync('./html/home.html', 'utf8');

  const pageTitle = 'Home Page';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + home + bottom); // naršyklei atiduodamas jau vienas HTML failas

});


app.get('/service/:slug', (req, res) => {
  // Iš URL paimame slug parametrą
  const slug = req.params.slug;
  // Randame atitinkamą paslaugą pagal slug
  const service = services.find(s => s.slug === slug);

  // Tikriname, ar paslauga rasta
  if (!service) {
    // Jei paslauga nerasta, grąžiname 404 klaidą
    return res.status(404).send('Service not found');
  }

  // skaitome tris atskirus failus. Toks skaitymas galimas tik backend'e
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const serviceHtml = fs.readFileSync('./html/service.html', 'utf8');

  // Sukuriame HTML sąrašą iš paslaugos savybių
  let features = '';
  service.features.forEach(feature => {
    features += `<li>${feature}</li>`;
  });

  // Pakeičiame vietas HTML faile su faktiniais duomenimis
  let servicePage = serviceHtml.replace('{{icon}}', service.icon)
    .replace('{{title}}', service.title)
    .replace('{{description}}', service.description)
    .replace('{{features}}', features);

  // Pakeičiame puslapio pavadinimą
  const pageTitle = service.title;
  const topWithTitle = top.replace('{{title}}', pageTitle);

  // Siunčiame galutinį HTML atsakymą
  res.send(topWithTitle + servicePage + bottom);
});



// SERVICES PAGE
app.get('/services', (req, res) => {

  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const services = fs.readFileSync('./html/services.html', 'utf8');


  const pageTitle = 'Services Page';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + services + bottom); // naršyklei atiduodamas jau vienas HTML failas

});


// ABOUT US PAGE
app.get('/about', (req, res) => {

  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const about = fs.readFileSync('./html/about.html', 'utf8');

  const pageTitle = 'About Us';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + about + bottom); // naršyklei atiduodamas jau vienas HTML failas

});


// CONTACT US PAGE
app.get('/contact', (req, res) => {

  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const contact = fs.readFileSync('./html/contact.html', 'utf8');


  const pageTitle = 'Contact Us';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + contact + bottom); // naršyklei atiduodamas jau vienas HTML failas

});



// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
  console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});