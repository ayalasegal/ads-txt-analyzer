import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import DetailsFrame from "./components/DetailsFrame";
import AdvertisersTable from "./components/AdvertisersTable";
import axios from "axios";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [domainDetails, setDomainDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleDomainDetails = async (domain) => {
    try {
      setIsLoading(true);
      const details = await fetchDomainDetails(domain);
      setDomainDetails(details);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDomainDetails = async (domain) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/getAds?domain=${domain}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <Typography
        variant="h3"
        color="primary"
        sx={{ marginBottom: "1rem", marginTop: "3rem", fontWeight: "bold" }}
      >
        Ads.txt Crawler
      </Typography>
      <InputComponent onDomainDetails={handleDomainDetails} />
      <div>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          domainDetails && (
            <>
              <DetailsFrame details={domainDetails} />
              <AdvertisersTable advertisers={domainDetails.results} domain={domainDetails.domain} />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;
