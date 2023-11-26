import React from 'react';
import Box from '@mui/material/Box';
import { Typography,Link } from '@mui/material';
function GeneralInformation({ information }) {
  const handleDownload = () => {
    // Create a Blob with the JSON data
    const blob = new Blob([JSON.stringify(information, null, 2)], { type: 'application/json' });

    // Create a link element and trigger a click to download the file
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `adstxt_${information.domain}.json`;
    a.click();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    <Typography sx={{ minWidth: 200 }}>Domain:<strong>{information.domain}</strong></Typography>
    <Typography sx={{ minWidth: 200 }}>Total Advertisers:<strong>{information.results.length}</strong></Typography>
    <Typography sx={{ minWidth: 200 }}>Parse time: <strong>{information.executionTime} ms</strong></Typography>
    <Typography sx={{ minWidth: 200 }}>Parse errors: <strong>{information.parseErrors}</strong></Typography>
    <Link onClick={handleDownload} underline="hover">
  Download
</Link>
  </Box>

  );
}

export default GeneralInformation;