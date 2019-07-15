import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  Logos,
  Names,
  Form,
  FormItem,
  ItemWrapper,
  IdWrapper
} from "./HomeStyles";
import axios from "axios";

function Home() {
  const [currencies, setCurrencies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&?order=market_cap_asc&&per_page=50&&page=1"
      );
      const data = response.data;
      setCurrencies(data);
      setLoaded(true);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reverseCurrencies = () => {
    setCurrencies(currencies.reverse());
    console.log(currencies);
  };

  const labels = ["Name", "Market Cap (USD)", "Price (USD)", "24h Change (%)"];

  if (loaded) {
    return (
      <Container>
        <Title>Top 50 cryptocurrencies by market capitalization</Title>
        <Form>
          <FormItem>
            <IdWrapper
              style={{ cursor: "pointer" }}
              onClick={reverseCurrencies}
            >
              <p>RANK</p>
            </IdWrapper>

            {labels.map(label => {
              if (label === "24h Change (%)") {
                return (
                  <ItemWrapper last key={label}>
                    <p>{label}</p>
                  </ItemWrapper>
                );
              } else {
                return (
                  <ItemWrapper key={label}>
                    <p>{label}</p>
                  </ItemWrapper>
                );
              }
            })}
          </FormItem>

          {currencies.map(coin => (
            <FormItem key={coin.id}>
              <IdWrapper>
                <span>{coin.market_cap_rank}</span>
              </IdWrapper>
              <ItemWrapper>
                <Logos src={coin.image} alt={coin.name} />
                <Names>{coin.name}</Names>
              </ItemWrapper>
              <ItemWrapper>
                <p
                  className={
                    coin.price_change_percentage_24h < 0 ? "red" : "green"
                  }
                >
                  $
                  {coin.market_cap
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </p>
              </ItemWrapper>
              <ItemWrapper>
                <p
                  className={
                    coin.price_change_percentage_24h < 0 ? "red" : "green"
                  }
                >
                  $
                  {coin.current_price
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </p>
              </ItemWrapper>
              <ItemWrapper last>
                <p
                  className={
                    coin.price_change_percentage_24h < 0 ? "red" : "green"
                  }
                >
                  {coin.price_change_percentage_24h
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  %
                </p>
              </ItemWrapper>
            </FormItem>
          ))}
        </Form>
      </Container>
    );
  } else {
    return (
      <Container>
        <Title>Top 50 cryptocurrencies by market capitalization</Title>
      </Container>
    );
  }
}

export default Home;
