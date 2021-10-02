const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();

const Users = require('../controllers/users');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Pai ta on na porta ${PORT}`));

app.get('/users', Users.getAll);
app.get('/users/:id', Users.getById);
app.post('/users', Users.create);
app.put('/users/:id', Users.update);
app.delete('/users/:id', Users.remove);
