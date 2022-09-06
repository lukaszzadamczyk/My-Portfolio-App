import React from "react";
import { Box, Link } from "@mui/material";
import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <Box className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lukasz Adamczyk</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <Link href="#contact" className="scroll_down">
          Scroll Down
        </Link>
      </Box>
    </header>
  );
};

export default Header;
