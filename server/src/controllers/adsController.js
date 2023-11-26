const adsService = require('../services/adsService');
const cache = {};
async function getAds(req, res) {
  const { domain } = req.query;
  if (cache[domain]) {
    res.json( {domain,executionTime:0,parseErrors:0 ,results:cache[domain]});
    return;
  }
  try {
    const startTime = new Date();
    const results = await adsService.getAds(domain);
    const executionTime = new Date() - startTime;
    cache[domain] = results;
    res.json({ domain,executionTime,parseErrors:0 ,results});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAds,
};
