


const express = require('express');
const fs = require('fs'); // failų sistemos modulis - biblioteka
const bodyParser = require('body-parser');
const app = express();
const port = 80;
// importuojam duomenis iš 'services.js' failo
const { services } = require('./services');


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // body duomenų parser'is

app.use(express.static('public'));



// Dalis Router

// Home Page
// ------------------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {

    // skaitome tris atskirus failus. Toks skaitymas gali būti tik backend'e
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const homepage = fs.readFileSync('./html/home.html', 'utf8');

    const pageTitle = 'Home Page';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + homepage + bottom); // naršyklei atiduodam vieną "suklijuotą iš kelių" failą
});



// Service
// ------------------------------------------------------------------------------------------------------------------
app.get('/service/:slug', (req, res) => {
    // iš URL paima slug parametrą
    const slugas = req.params.slug;
    // Randame atitinkamą paslaugą pagal slug'ą
    const selectedData = services.find(item => item.slug === slugas);

    // Tikriname, ar paslauga rasta
    if (!selectedData) {
        // Jei paslauga nerasta, grąžiname 404 klaidą
        return res.status(404).send('Service not found');
    }

    // skaitome tris atskirus failus. Toks skaitymas galimas tik backend'e
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const serviceHTML = fs.readFileSync('./html/service.html', 'utf8');

    // Sukuriame HTML sąrašą iš paslaugos savybių
    let features = '';

    selectedData.features.forEach(feature => {
        features += `<li>${feature}</li>`;
    });

    // Pakeičiame vietas HTML faile su faktiniais duomenimis
    let servicePage = serviceHTML
        .replace('{{icon}}', selectedData.icon)
        .replace('{{title}}', selectedData.title)
        .replace('{{description}}', selectedData.description)
        .replace('{{features}}', features);

    // Pakeičiame puslapio pavadinimą
    const pageTitle = selectedData.title;
    const topWithTitle = top.replace('{{title}}', pageTitle);

    // Siunčiame galutinį HTML atsakymą
    res.send(topWithTitle + servicePage + bottom);
});




// Services
// ------------------------------------------------------------------------------------------------------------------
app.get('/services', (req, res) => {

    // skaitome tris atskirus failus. Toks skaitymas gali būti tik backend'e
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const services = fs.readFileSync('./html/services.html', 'utf8');

    const pageTitle = 'Services';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + services + bottom); // naršyklei atiduodam vieną "suklijuotą iš kelių" failą
});



// About Us
// ------------------------------------------------------------------------------------------------------------------
app.get('/about', (req, res) => {

    // skaitome tris atskirus failus. Toks skaitymas gali būti tik backend'e
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    const about = fs.readFileSync('./html/about.html', 'utf8');

    const pageTitle = 'About Us';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + about + bottom); // naršyklei atiduodam vieną "suklijuotą iš kelių" failą
});



// Contact Us
// ------------------------------------------------------------------------------------------------------------------
app.get('/contact', (req, res) => {

    // skaitome tris atskirus failus. Toks skaitymas gali būti tik backend'e
    const top = fs.readFileSync('./html/top.html', 'utf8');
    const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
    let contact = fs.readFileSync('./html/contact.html', 'utf8');

    const message = req.query.msg;

    if (message === 'ok') { // rodom sėkmės žinutę
        contact = contact.replace('{{successMessageDisplay}}', '');
    } else { // nerodom sėkmės žinutės
        contact = contact.replace('{{successMessageDisplay}}', 'style="display: none;"');
    }

    const pageTitle = 'Contact Us';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + contact + bottom); // naršyklei atiduodam vieną "suklijuotą iš kelių" failą
});


app.post('/form-submit', (req, res) => {

    const username = req.body.name;
    const emailAddress = req.body.email;
    const msg = req.body.message;

    let data = fs.readFileSync('data.json', 'utf8'); // nuskaitome esamus duomenis
    let json = JSON.parse(data); // paverčiame į JSON objektą
    json.push({ username,emailAddress, msg }); // pridedame naują žinutę
    data = JSON.stringify(json, null, 2); // paverčiame atgal į string'ą
    fs.writeFileSync('data.json', data); // įrašome atgal į failą


    res.redirect('/contact?msg=ok');
});







// ------------------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, _ => {
    console.log(`Viskas OK. Express js dirba ant ${port} porto.`);
});


