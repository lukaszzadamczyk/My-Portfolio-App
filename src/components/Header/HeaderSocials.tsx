import React from "react";
import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export const HeaderSocials = () => {
  return (
    <Box className="header__socials">
      <Link href="https://github.com/lukaszzadamczyk" target="_blank">
        <GitHubIcon />
      </Link>
      <Link
        href="https://www.linkedin.com/in/%C5%82ukasz-adamczyk-6ba7021b6/"
        target="_blank"
      >
        <LinkedInIcon />
      </Link>
      <Link href="https://www.facebook.com/xlancer92x/" target="_blank">
        <FacebookIcon />
      </Link>
    </Box>
  );
};
