import styled from 'styled-components'

const GlobalTracking = styled.div`
  grid-area: global;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

`

const Text = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  & span {
    padding-left: 5px;
  }
  margin: 5px;

  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 7px;
  }
`

export { GlobalTracking, Text }
