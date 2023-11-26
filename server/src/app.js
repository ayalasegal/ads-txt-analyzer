const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adsRouter = require("./routes/adsRouter");
const path = require('path'); // Make sure to require the 'path' module
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// Catch-all route to serve the React app
app.use(express.static(path.join(__dirname, '../../client/build')));

app.use("/", adsRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



module.exports = app; // Export the app for testing purposes
