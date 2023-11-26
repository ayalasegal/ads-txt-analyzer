import React from 'react';
import Box from '@mui/material/Box';
import { Typography,Link } from '@mui/material';
function DetailsFrame({ details }) {
  // Render details received from the server
  const handleDownload = () => {
    // Create a Blob with the JSON data
    const blob = new Blob([JSON.stringify(details, null, 2)], { type: 'application/json' });

    // Create a link element and trigger a click to download the file
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `adstxt_${details.domain}.json`;
    a.click();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    <Typography sx={{ minWidth: 200 }}>Domain:<strong>{details.domain}</strong></Typography>
    <Typography sx={{ minWidth: 200 }}>Total Advertisers:<strong>{details.results.length}</strong></Typography>
    <Typography sx={{ minWidth: 200 }}>Parse time: <strong>{details.executionTime} ms</strong></Typography>
    <Typography sx={{ minWidth: 200 }}>Parse errors: <strong>{details.parseErrors}</strong></Typography>
    <Link onClick={handleDownload} underline="hover">
  Download
</Link>
  </Box>

  );}

export default DetailsFrame;
