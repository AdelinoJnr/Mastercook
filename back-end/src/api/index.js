const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Pai ta on na porta ${PORT}`));
