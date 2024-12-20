const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());
const PORT = 3000;

const password = 'senha';

app.get('/token', async(req, res) => {

  
  const messageRandom = Math.random().toString(36).substring(7);
  console.log(messageRandom);

  const token = jwt.sign({ message: messageRandom }, password, { expiresIn: '1h' });
  res.json({token})
});

app.post('/decodifica', (req, res) => {
  const { token } = req.body;

  jwt.verify(token, password, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    res.json({ message: decoded.message });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
