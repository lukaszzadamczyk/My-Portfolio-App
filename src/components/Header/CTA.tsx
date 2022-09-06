import React from "react";
import { Box, Button, Link } from "@mui/material";
import CV from "../../assets/cv.pdf";
import { theme } from "../../utils/theme";

export const CTA = () => {
  return (
    <Box className="cta">
      <Button variant="outlined" size="large">
        <Link
          href={CV}
          download
          underline="none"
          color={theme.palette.primary.contrastText}
        >
          Download CV
        </Link>
      </Button>
      <Button variant="contained" size="large">
        <Link
          href="#contact"
          underline="none"
          color={theme.palette.primary.contrastText}
        >
          Let's Talk
        </Link>
      </Button>
    </Box>
  );
};
