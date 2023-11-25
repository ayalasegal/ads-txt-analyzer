const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors()); // Use cors middleware
app.use(express.json());

app.post('/getAds', async (req, res) => {
  const { domain } = req.body;

  try {
    const response = await axios.get(`http://${domain}/ads.txt`);
    const adsTxt = response.data;
    const advertisers = parseAdsTxt(adsTxt);
    res.json({ advertisers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

function parseAdsTxt(adsTxt) {
  const advertiserFrequency = {};
  const lines = adsTxt.split('\n');

  // Iterate through each line in the ads.txt file
  lines.forEach(line => {
    // Skip lines that don't contain valid advertiser information
    if (!line.trim() || line.startsWith('#') || line.includes('=') || !line.includes(',')) {
      return;
    }

    // Split the line into fields
    const fields = line.split(',');

    // Extract the advertiser domain (the first field)
    const advertiserDomain = fields[0].trim();

    // Update the frequency in the object
    advertiserFrequency[advertiserDomain] = (advertiserFrequency[advertiserDomain] || 0) + 1;
  });

  // Convert the object into an array of objects
  const result = Object.entries(advertiserFrequency).map(([domain, count]) => ({
    domain,
    count
  }));

  return result;
}




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
