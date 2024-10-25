// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const animalRoutes = require('./routes/animalRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/animals', animalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
