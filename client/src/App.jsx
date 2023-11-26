import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import DetailsFrame from "./components/DetailsFrame";
import AdvertisersTable from "./components/AdvertisersTable";
import axios from "axios";
import "./App.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [domainDetails, setDomainDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleDomainDetails = async (domain) => {
    try {
      setIsLoading(true);
      const details = await fetchDomainDetails(domain);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setDomainDetails(details);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDomainDetails = async (domain) => {
    try {
      const response = await axios.post("http://localhost:5000/getAds", {
        domain,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <h1>Ads.txt Crawler</h1>
      <InputComponent onDomainDetails={handleDomainDetails} />
      <div>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          domainDetails && (
            <>
              <DetailsFrame details={domainDetails} />
              <AdvertisersTable advertisers={domainDetails.results} />
            </>
          )
        )}
      </div>
    </div>
  );
}

export default App;
