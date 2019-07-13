import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 30px 1fr;
  grid-template-areas: "navbar" "global" "view";
`;

export { Container };
