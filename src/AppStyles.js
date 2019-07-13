import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px min-content 1fr;
  grid-template-areas: "navbar" "global" "view";
`;

export { Container };
