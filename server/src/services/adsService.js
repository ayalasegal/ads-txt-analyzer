const axios = require('axios');
const cache = {};
async function getAds(domain) {
  
  try {
    const response = await axios.get(`http://${domain}/ads.txt`);
    const adsTxt = response.data;
    return parseAdsTxt(adsTxt);
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
}

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
      count}))
      return result
    }
    
module.exports = {
  getAds,
};
