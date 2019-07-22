import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
  text-transform: capitalize;

  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const Container = styled.div`
  grid-area: view;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logos = styled.img`
  height: 25px;
`

const Names = styled.span`
  font-size: 14px;
  padding-left: 5px;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }
`

const Form = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 85vw;
  display: flex;
  flex-direction: column;
  margin: 15px 0;

  @media only screen and (max-width: 900px) {
    width: 95vw;
  }

  ${props => props.last && `margin: 0`}

  ${props =>
    props.first &&
    `
    margin-bottom: 0
    border: none;
  `}
`

const FormItem = styled.div`
  display: grid;
  grid-template-columns: 45px 2fr 2fr 1fr 1fr;
  grid-template-rows: 45px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 700px) {
    grid-template-rows: 35px;
  }

  ${props =>
    props.first &&
    `
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
  `}
`

const IdWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);

  & span,
  p {
    font-size: 11px;

    @media only screen and (max-width: 800px) {
      font-size: 10px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 8px;
    }
  }
`

const ItemWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  padding-left: 10px;

  & p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 13px;

    &.red {
      color: #f54242;
    }

    &.green {
      color: #62ed3b;
    }

    @media only screen and (max-width: 800px) {
      font-size: 10px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 8px;
    }
  }

  ${props =>
    props.last &&
    `
    justify-content: flex-end;
    margin-right: 15px;
  `}
`

const Button = styled.button`
  border: none;
  color: #f7931a;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  outline-style: none;
  box-shadow: none;
  background-color: white;
  padding: 10px 15px;
  font-size: 14px;
  margin-left: 2px;

  &:hover {
    color: #d78017;
  }

  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }
`

export {
  Title,
  Container,
  Logos,
  Names,
  Form,
  FormItem,
  ItemWrapper,
  IdWrapper,
  Button
}
