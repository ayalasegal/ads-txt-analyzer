const adsService = require('../services/adsService');

async function getAds(req, res) {
  console.log(req.body)
  const { domain } = req.body;
  console.log("domain: ",domain)
  try {
    const startTime = new Date();
    const advertisers = await adsService.getAds(domain);
    const parseTime = new Date() - startTime;
    const totalAdvertisers = advertisers.length;

    res.json({ advertisers,totalAdvertisers,parseTime,parseErrors:0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAds,
};
