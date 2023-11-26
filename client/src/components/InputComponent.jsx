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
    <div
      className="input-container"
      style={{
        display: "flex",
        marginBottom: "1rem",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <TextField
        className="input-text-field"
        placeholder="Enter domain name... (e.g. msn.com)"
        variant="outlined"
        onChange={(e) => setDomain(e.target.value)}
        style={{
          marginRight: "1rem",
          flex: 1,
          width: "70%",
          marginBottom: "1rem",
        }}
        onKeyPress={handleKeyPress}
      />
      <Button
        className="input-button "
        variant="contained"
        onClick={handleClick}
        style={{ height: "3.5rem", width: "30%", textTransform: "initial" }}
      >
        Parse Ads.txt
      </Button>
    </div>
  );
}

export default InputComponent;
