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
      console.log(data);
    }
    getData();
  }, []);
  const {
    total_market_cap,
    total_volume,
    active_cryptocurrencies,
    markets
  } = globalData;
  if (loaded) {
    return (
      <GlobalTracking>
        <Text>
          Market Cap:
          <span>
            $
            {total_market_cap.usd
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </span>
        </Text>
        <Text>
          Volume:
          <span>
            ${total_volume.usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
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
      </GlobalTracking>
    );
  } else {
    return <GlobalTracking />;
  }
}

export default GlobalTracker;
