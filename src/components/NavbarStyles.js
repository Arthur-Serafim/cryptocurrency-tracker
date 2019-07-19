import styled from "styled-components";

const Navigation = styled.div`
  grid-area: navbar;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 35px;
`;

export { Navigation, Logo };
