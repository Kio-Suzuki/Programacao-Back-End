const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const user = req.session.user || null;
  const userTasks = req.session.tasks || [];
  res.render('index', { user, tasks: userTasks });
});

router.post('/salvauser', (req, res) => {
  const { nome } = req.body;
  req.session.user = nome;
  req.session.tasks = [];
  res.redirect('/');
});

router.post('/addtask', (req, res) => {

  const { task } = req.body;
  req.session.tasks.push({ task });
  res.redirect('/');
});

router.get('/random', (req, res) => {
  let randomNumber = req.cookies.randomNumber;
  if (!randomNumber) {
    randomNumber = Math.floor(Math.random() * 100);
    res.cookie('randomNumber', randomNumber, { 
      httpOnly: true,
      maxAge: 1000 * 60 * 2
    });
  }
  res.send(`Número aleatório: ${randomNumber}</br></br><a href="/">Voltar</a>`);
});

let globalAccessCount = 0;

router.get('/contador', (req, res) => {
  globalAccessCount++;
  req.session.userAccessCount = (req.session.userAccessCount || 0) + 1;

  res.send(`
    <p>Contador global de acessos: ${globalAccessCount}</p>
    <p>Seus acessos: ${req.session.userAccessCount}</p>
    <a href="/">Voltar</a>
  `);
});

module.exports = router;