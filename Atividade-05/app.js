const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const PORT = 3000;

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser()); 
app.use(session({
  secret: '#@A4327Asdzw', 
  resave: false,
  saveUninitialized: false
}));

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Erro ao encerrar a sessão.');
    }
    res.redirect('/');
  });
});

app.use('/', require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
