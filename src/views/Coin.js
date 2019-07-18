import React from 'react'

function Coin(props) {
  return <h1>{props.match.params.id}</h1>
}
export default Coin
