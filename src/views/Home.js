import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  Logos,
  Names,
  Form,
  FormItem,
  NameWrapper,
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
  if (loaded) {
    return (
      <Container>
        <Title>Top 50 cryptocurrencies by market capitalization</Title>
        <Form>
          {currencies.map(coin => (
            <FormItem key={coin.market_cap_change_24h}>
              <IdWrapper>
                <span>{coin.market_cap_rank}</span>
              </IdWrapper>
              <NameWrapper>
                <Logos src={coin.image} alt={coin.name} />
                <Names>{coin.name}</Names>
              </NameWrapper>
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
