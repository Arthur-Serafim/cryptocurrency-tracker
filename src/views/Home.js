import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  Title,
  Container,
  Logos,
  Names,
  Form,
  FormItem,
  ItemWrapper,
  IdWrapper,
  Button
} from './HomeStyles'

import nextPage from '../functions/nextPage'
import prevPage from '../functions/prevPage'
import reverseCurrencies from '../functions/reverseCurrencies'

function Home() {
  const labels = ['Name', 'Market Cap (USD)', 'Price (USD)', '24h Change (%)']
  const baseUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&?order=market_cap_asc&&per_page=100&&page=`

  const [currencies, setCurrencies] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [page, setPage] = useState(1)
  const [end, setEnd] = useState(false)
  const [start, setStart] = useState(true)
  const [url, setUrl] = useState(baseUrl + page)

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(url)
      const data = response.data
      setCurrencies(data)
      setLoaded(true)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <Container>
      <Title>Top 100 cryptocurrencies by market capitalization</Title>
      <Form first>
        <FormItem first>
          {!start && (
            <Button
              onClick={() =>
                prevPage(page, setPage, setUrl, setLoaded, setStart)
              }>
              &larr; Previous 100
            </Button>
          )}
          {!end && (
            <Button
              onClick={() =>
                nextPage(page, setPage, setUrl, setStart, setLoaded, setEnd)
              }>
              Next 100 &rarr;
            </Button>
          )}
        </FormItem>
      </Form>
      <Form last>
        <FormItem>
          <IdWrapper
            style={{ cursor: 'pointer' }}
            onClick={() => reverseCurrencies(currencies, setCurrencies)}>
            <p>RANK</p>
          </IdWrapper>

          {labels.map(label => {
            if (label === '24h Change (%)') {
              return (
                <ItemWrapper last key={label}>
                  <p>{label}</p>
                </ItemWrapper>
              )
            } else {
              return (
                <ItemWrapper key={label}>
                  <p>{label}</p>
                </ItemWrapper>
              )
            }
          })}
        </FormItem>

        {loaded &&
          currencies.map(coin => (
            <FormItem key={coin.id}>
              <IdWrapper>
                <span>{coin.market_cap_rank}</span>
              </IdWrapper>
              <ItemWrapper>
                <Logos src={coin.image} alt={coin.name} />
                <Names>{coin.name}</Names>
              </ItemWrapper>
              <ItemWrapper>
                {coin.price_change_percentage_24h && (
                  <p
                    className={
                      coin.price_change_percentage_24h < 0 ? 'red' : 'green'
                    }>
                    $
                    {coin.market_cap
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </p>
                )}
              </ItemWrapper>
              <ItemWrapper>
                <p
                  className={
                    coin.price_change_percentage_24h < 0 ? 'red' : 'green'
                  }>
                  $
                  {coin.current_price
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </p>
              </ItemWrapper>
              <ItemWrapper last>
                <p
                  className={
                    coin.price_change_percentage_24h < 0 ? 'red' : 'green'
                  }>
                  {coin.price_change_percentage_24h &&
                    coin.price_change_percentage_24h
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  %
                </p>
              </ItemWrapper>
            </FormItem>
          ))}
      </Form>

      {loaded && (
        <Form first>
          <FormItem first>
            {!start && (
              <Button
                onClick={() =>
                  prevPage(page, setPage, setUrl, setLoaded, setStart)
                }>
                &larr; Previous 100
              </Button>
            )}
            {!end && (
              <Button
                onClick={() =>
                  nextPage(page, setPage, setUrl, setStart, setLoaded, setEnd)
                }>
                Next 100 &rarr;
              </Button>
            )}
          </FormItem>
        </Form>
      )}
    </Container>
  )
}

export default Home
