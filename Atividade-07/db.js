const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

sequelize
  .sync()
  .then(() => {
    console.log('Banco de dados criado com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao criar o banco de dados', err);
  });

module.exports = sequelize;
