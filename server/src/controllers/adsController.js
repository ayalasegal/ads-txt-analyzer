const adsService = require('../services/adsService');

async function getAds(req, res) {
  console.log(req.body)
  const { domain } = req.body;
  console.log("domain: ",domain)
  try {
    const startTime = new Date();
    const results = await adsService.getAds(domain);
    const executionTime = new Date() - startTime;

    res.json({ domain,executionTime,parseErrors:0 ,results});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAds,
};
