import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
function InputComponent({ onDomainDetails }) {
  const [domain, setDomain] = useState('');

  const handleClick = () => {
    onDomainDetails(domain);
  };

  return (
       <>
<TextField
  placeholder="Enter domain name... (e.g. msn.com)"
  variant="outlined"
  onChange={(e) => setDomain(e.target.value)}
  style={{ width: '70%', height:'3rem'}} 
/>
<Button
  variant="contained"
  onClick={handleClick}
  style={{ marginLeft: '1rem', height:'3.5rem' }} 
>
  Parse Ads.txt
</Button>
</>
  );
}

export default InputComponent;
