const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adsRouter = require('./routes/adsRouter');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', adsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing purposes

