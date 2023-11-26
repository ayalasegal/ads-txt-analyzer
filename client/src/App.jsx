import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import DetailsFrame from './components/DetailsFrame';
import AdvertisersTable from './components/AdvertisersTable';
import axios from 'axios';
import './App.css';

function App() {
  const [domainDetails, setDomainDetails] = useState(null);

  const handleDomainDetails = async (domain) => {
    try {
      // Make a server call to fetch domain details
      const details = await fetchDomainDetails(domain);
      setDomainDetails(details);
    } catch (error) {
      console.error(error);
    }
  };


  const fetchDomainDetails = async (domain) => {
    try {
      const response = await axios.post('http://localhost:5000/getAds', { domain });
      return response.data
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <div>
      <h1>Ads.txt Crawler</h1>
      <InputComponent
        onDomainDetails={handleDomainDetails}
      />
      {domainDetails && <DetailsFrame details={domainDetails} />}
      {domainDetails && <AdvertisersTable advertisers={domainDetails.results} />}
    </div>
  );
}

export default App;
