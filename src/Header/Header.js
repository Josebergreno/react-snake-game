import styles from "./Header.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        height: "10vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ height: "inherit", display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h2"
          noWrap
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            height: "100%",
            width: "50%",
            fontSize: "10vh",
          }}
        >
          SN8KE
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
