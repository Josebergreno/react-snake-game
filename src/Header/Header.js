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
        <span className={styles["bigger"]}>S</span>
        <span className={styles["bigger"]}>N</span>
        <span className={styles["bigger"]}>8</span>
        <span className={styles["bigger"]}>K</span>
        <span className={styles["bigger"]}>E</span>
      </h2>
    </AppBar>
  );
};

export default Header;
