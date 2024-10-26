const express = require('express');
const app = express();

app.get('/pag1', (req, res) => {
  res.send(`<h1>Página 1<h1><a href="/pag2">Ir para a página 2</a>`);
});

app.get('/pag2', (req, res) => {
  res.send(`<h1>Página 2<h1><a href="/pag1">Ir para a página 1</a>`);
});

app.listen(3000, () => {
  console.log('Servidor rodando...');
});