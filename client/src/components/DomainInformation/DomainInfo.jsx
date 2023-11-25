import React, { useState,useEffect } from 'react';

import axios from 'axios';
import  AdvertisersTable  from './Table/AdvertisersTable';



function DomainInfo({ domain }) {
  const [domainInformation, setDomainInformation] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getDomainInformation = async (domain) => {
    try {
      const response = await axios.post('http://localhost:5000/getAds', { domain });
      setDomainInformation(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // Your code to be executed when the component is mounted
    getDomainInformation(domain)

  }, []); 



  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <AdvertisersTable advertisers={domainInformation.advertisers} isLoading={isLoading}/>
    </div>
  );
}

export default DomainInfo;
