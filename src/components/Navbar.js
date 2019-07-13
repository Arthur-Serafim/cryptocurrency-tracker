import React from "react";
import { Navigation, Logo } from "./NavbarStyles";
import FullLogo from "../images/FullLogo.png";

function Navbar() {
  return (
    <Navigation>
      <Logo src={FullLogo} alt="website logo" />
    </Navigation>
  );
}

export default Navbar;
