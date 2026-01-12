


const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Labas, Barsukai!');
});

app.listen(port, () => {
  console.log(`Viskas OK. Barsukas dirba ant ${port} porto.`);
});


