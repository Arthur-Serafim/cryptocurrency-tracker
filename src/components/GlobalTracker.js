import React, { useEffect, useState } from "react";
import { GlobalTracking, Text } from "./GlobalTrackerStyles";
import axios from "axios";

function GlobalTracker() {
  const [globalData, setGlobalData] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/global"
      );
      const data = response.data.data;
      setGlobalData(data);
      setLoaded(true);
    }
    getData();
  }, []);

  const {
    total_market_cap,
    total_volume,
    active_cryptocurrencies,
    markets,
  } = globalData;
  return (
    <GlobalTracking>
      {loaded && (
        <>
          <Text>
            Market Cap:
            <span>
              $
              {parseInt(total_market_cap.usd)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
          </Text>
          <Text>
            Volume:
            <span>
              $
              {parseInt(total_volume.usd)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
          </Text>
          <Text>
            Active Cryptocurrencies:
            <span>{active_cryptocurrencies}</span>
          </Text>
          <Text>
            Markets:
            <span>{markets}</span>
          </Text>
        </>
      )}
    </GlobalTracking>
  );
}

export default GlobalTracker;
