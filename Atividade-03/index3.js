const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const {usuario, senha} = req.body;
  if(senha === usuario + usuario) {
    res.send('Usuário possui permissão de acesso');
  } else {
    res.send('Usuário não possui permissão de acesso');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando...');
});