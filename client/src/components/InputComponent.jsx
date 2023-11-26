import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function InputComponent({ onDomainDetails }) {
  const [domain, setDomain] = useState("");

  const handleClick = () => {
    onDomainDetails(domain);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="input-container">
      <TextField
        className="input-text-field"
        placeholder="Enter domain name... (e.g. msn.com)"
        variant="outlined"
        onChange={(e) => setDomain(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        variant="contained"
        className="input-button"
        onClick={handleClick}
      >
        Parse Ads.txt
      </Button>
    </div>
  );
}

export default InputComponent;
