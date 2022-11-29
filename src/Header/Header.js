import * as React from "react";
import AppBar from "@mui/material/AppBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h2 className={styles["title"]}>SN8KE</h2>
    </AppBar>
  );
};

export default Header;
