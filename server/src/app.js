const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adsRouter = require("./routes/adsRouter");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// Serving static files from the React build folder
app.use(express.static(path.join(__dirname, '../../client/build')));

app.use("/", adsRouter);

// Handling all other routes by serving the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



module.exports = app;
