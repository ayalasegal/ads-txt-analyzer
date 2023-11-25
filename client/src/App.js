import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [domain, setDomain] = useState('');
  const [advertisers, setAdvertisers] = useState([]);

  const getAdvertisers = async () => {
    try {
      const response = await axios.post('http://localhost:5000/getAds', { domain });
      setAdvertisers(response.data.advertisers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Ads.txt Analyzer</h1>
      <label>
        Enter Domain:
        <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
      </label>
      <button onClick={getAdvertisers}>Get Advertisers</button>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {advertisers.map((advertiser) => (
            <tr key={advertiser.domain}>
              <td>{advertiser.domain}</td>
              <td>{advertiser.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
