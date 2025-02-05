const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const sequelize = require('./db');
const Task = require('./src/model/taskModel');

sequelize
  .sync()
  .then(() => {
    console.log('Banco de dados criado com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao criar o banco de dados', err);
  });

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
});
