


const express = require('express');
const fs = require('fs'); // failų sistemos modulis - biblioteka
const app = express();
const port = 80;


// Failai folderyje 'public' bus pasiekiami per naršyklę
app.use(express.static('public')); // Nurodome, kad statiniai failai bus iš 'public' folderio



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
    const contact = fs.readFileSync('./html/contact.html', 'utf8');

    const pageTitle = 'Contact Us';
    const topWithTitle = top.replace('{{title}}', pageTitle);

    res.send(topWithTitle + contact + bottom); // naršyklei atiduodam vieną "suklijuotą iš kelių" failą
});







// ------------------------------------------------------------------------------------------------------------------
// Paleidžia serverį ir parašo terminale, kad viskas gerai.
app.listen(port, () => {
    console.log(`Viskas OK. Barsukas dirba ant ${port} porto.`);
});


