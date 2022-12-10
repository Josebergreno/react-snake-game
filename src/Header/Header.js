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
      <h2 className={styles["title"]}>
        <span>S</span>
        <span>N</span>
        <span className={styles["eight"]}>8</span>
        <span>K</span>
        <span>E</span>
      </h2>
    </AppBar>
  );
};

export default Header;
