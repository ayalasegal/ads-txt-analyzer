import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
function DomainForm({ setDomain,setIsInitialized}) {

    const handleInputChange = (e) => {
      setDomain(e.target.value);
    };
  
    return (
        <div style={{ width: '80%', margin: 'auto', marginBottom:'3em' }}>
              <h1 >Ads.txt Analyzer</h1>

<div style={{ display: 'flex', alignItems: 'baseline', marginLeft:"5%" ,marginBottom:'' }}>
<TextField
  placeholder="Enter a content site domain (e.g., msn.com..)"
  variant="outlined"
  onChange={handleInputChange}
  style={{ width: '70%', height:'3rem'}} 
/>
<Button
  variant="contained"
  onClick={() => setIsInitialized(true)}
  style={{ marginLeft: '1rem', height:'3.5rem' }} 
>
  Get Advertisers
</Button>

      </div>
      </div>
    );
}

export default DomainForm;
