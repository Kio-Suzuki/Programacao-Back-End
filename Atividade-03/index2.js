const express = require('express');
const app = express();

app.get('/:texto', (req, res) => {
  const invertido = req.params.texto.split('').reverse().join('');
  res.send(`<h1>Exibindo a palavra ${req.params.texto} invertido(a)<h1>` + invertido);
});

app.listen(3000, () => {
  console.log('Servidor rodando...');
});