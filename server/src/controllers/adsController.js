const adsService = require('../services/adsService');

async function getAds(req, res) {
  const { domain } = req.body;
  try {
    const advertisers = await adsService.getAds(domain);
    res.json({ advertisers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAds,
};
