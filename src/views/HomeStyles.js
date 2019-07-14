import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
  text-transform: capitalize;
`;

const Container = styled.div`
  grid-area: view;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logos = styled.img`
  height: 25px;
`;

const Names = styled.span`
  font-size: 14px;
  padding-left: 10px;
`;

const Form = styled.div`
  width: 85vw;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const FormItem = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 35px 1fr;
  align-content: center;
`;

const IdWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
`;

export {
  Title,
  Container,
  Logos,
  Names,
  Form,
  FormItem,
  NameWrapper,
  IdWrapper
};
