import React from "react";
import styles from "./Buttons.module.css";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PauseIcon from "@mui/icons-material/Pause";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Buttons = (props) => {
  return (
    <div className={styles["button-container"]}>
      <div className={styles["first-row"]}>
        <Button
          autoFocus
          onClick={props.onUpClick}
          onKeyDown={props.onKeyPress}
          key="up"
          variant="outlined"
          sx={{
            margin: "5px",
            width: "10%",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          <ArrowUpwardIcon sx={{ color: "white" }} />
        </Button>
      </div>
      <div className={styles["second-row"]}>
        <Button
          onClick={props.onLeftClick}
          variant="outlined"
          sx={{
            margin: "5px",
            width: "10%",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          <ArrowBackIcon sx={{ color: "white" }} />
        </Button>

        <Button
          tabIndex={1}
          onClick={props.onDownClick}
          variant="outlined"
          sx={{
            margin: "5px",
            width: "10%",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          <ArrowDownwardIcon sx={{ color: "white" }} />
        </Button>

        <Button
          onClick={props.onRightClick}
          key="right"
          variant="outlined"
          sx={{
            margin: "5px",
            width: "10%",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          <ArrowForwardIcon sx={{ color: "white" }} />
        </Button>
      </div>
      <div className={styles["third-row"]}>
        <Button
          onClick={props.onPause}
          variant="outlined"
          sx={{
            width: "10%",
            marginTop: "5px",
            marginBottom: "5px",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          <PauseIcon sx={{ color: "white" }} />
        </Button>
        <Button
          onClick={props.onRestart}
          variant="outlined"
          sx={{
            marginLeft: "40px",
            marginTop: "5px",
            marginBottom: "5px",
            width: "10%",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          <RestartAltIcon
            sx={{
              color: "white",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
