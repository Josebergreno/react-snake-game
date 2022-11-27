import React from "react";
import styles from "./Buttons.module.css";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Buttons = (props) => {
  return (
    <div className={styles["button-container"]}>
      <div className={styles["top-row"]}>
        <Button
          onClick={props.onUpClick}
          key="up"
          variant="outlined"
          sx={{ margin: "3px" }}
        >
          <ArrowUpwardIcon />
        </Button>
      </div>
      <div className={styles["bottom-row"]}>
        <Button
          onClick={props.onLeftClick}
          variant="outlined"
          sx={{ margin: "3px" }}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          onClick={props.onDownClick}
          variant="outlined"
          sx={{ margin: "3px" }}
        >
          <ArrowDownwardIcon />
        </Button>
        <Button
          onClick={props.onRightClick}
          key="right"
          variant="outlined"
          sx={{ margin: "3px" }}
        >
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
