import React from "react";
import { Navigation, Logo } from "./NavbarStyles";
import FullLogo from "../images/FullLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Navigation>
      <Link to="/">
        <Logo src={FullLogo} alt="website logo" />
      </Link>
    </Navigation>
  );
}

export default Navbar;
