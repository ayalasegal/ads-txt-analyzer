import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function InputComponent({ onDomainDetails }) {
  const [domain, setDomain] = useState("");
  const handleClick = () => {
    onDomainDetails(domain);
  };

  return (
    <div className="input-container" style={{ display: "flex" }}>
      <TextField
        className="input-text-field"
        placeholder="Enter domain name... (e.g. msn.com)"
        variant="outlined"
        onChange={(e) => setDomain(e.target.value)}
        style={{ marginRight: "1rem", flex: 1 }} // Add margin to the right and flex to fill remaining space
      />
      <Button
        variant="contained"
        className="input-button"
        onClick={handleClick}
        style={{ height: "3.5rem" }}
      >
        Parse Ads.txt
      </Button>
    </div>
  );
}

export default InputComponent;
