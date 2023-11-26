import React from "react";
import Box from "@mui/material/Box";
import { Typography, Link } from "@mui/material";

function DetailsFrame({ details }) {
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(details, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `adstxt_${details.domain}.json`;
    a.click();
  };

  return (
    <Box className="details-container" >
      <Typography className="detail">
        Domain:<strong>{details.domain}</strong>
      </Typography>
      <Typography className="detail">
        Total Advertisers:<strong>{details.results.length}</strong>
      </Typography>
      <Typography className="detail">
        Parse time:{" "}
        <strong>
          {details.executionTime === 0
            ? "Cached"
            : details.executionTime + " ms"}{" "}
        </strong>
      </Typography>
      <Typography className="detail">
        Parse errors: <strong>{details.parseErrors}</strong>
      </Typography>
      <Link className="detail" onClick={handleDownload} underline="hover">
        Download
      </Link>
    </Box>
  );
}

export default DetailsFrame;
