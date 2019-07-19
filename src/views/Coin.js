import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Coin(props) {
  const id = props.match.params.id
  const baseUrl = 'https://api.coingecko.com/api/v3/coins/'

  const [info, setInfo] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        `${baseUrl}${id}?localization=false&tickers=false&community_data=false&developer_data=false`
      )
      const data = response.data
      console.log(data)
      setInfo(data)
      setLoaded(true)
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (loaded) {
    return (
      <>
        <img src={info.image.small} alt={`{info.name}`} />
        <h1>
          {info.name}({info.symbol})
        </h1>
      </>
    )
  } else {
    return <></>
  }
}
export default Coin
