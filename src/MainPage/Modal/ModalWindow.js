import * as React from "react";
import styles from "./ModalWindow.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const ModalWindow = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80vmin",
    backgroundColor: "background.paper",
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      component="span"
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={styles["modal-header"]}>
          {props.direction === "gameOver" && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You Lose!!!!!!
            </Typography>
          )}
          {props.direction === "start" && (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Choose a difficulty and press play!
            </Typography>
          )}
        </div>

        <div className={styles["try-again--btn"]}>
          {props.direction === "gameOver" && (
            <Button onClick={handleClose} variant="outlined">
              Try Again
            </Button>
          )}
          {props.direction === "start" && (
            <Button onClick={handleClose} variant="outlined">
              Play
            </Button>
          )}
        </div>
        <div className={styles["button-group"]}>
          <Button
            onClick={(e) => {
              e.target.focus();
              return props.onSpeedChange(props.snakeSpeed.slow);
            }}
            variant="outlined"
            sx={{
              margin: "2px",
              transition: ".5s",
              "&:hover": { transform: "scale(1.05)" },
              "&:focus": {
                backgroundColor: "lightgreen",
                color: "black",
                transform: "scale(1.05)",
              },
            }}
          >
            Easy
          </Button>
          <Button
            onClick={(e) => {
              e.target.focus();
              return props.onSpeedChange(props.snakeSpeed.normal);
            }}
            variant="outlined"
            sx={{
              margin: "2px",
              transition: ".5s",
              "&:hover": { transform: "scale(1.05)" },
              "&:focus": {
                backgroundColor: "yellow",
                color: "black",
                transform: "scale(1.05)",
              },
            }}
          >
            Medium
          </Button>
          <Button
            onClick={(e) => {
              e.target.focus();
              return props.onSpeedChange(props.snakeSpeed.fast);
            }}
            variant="outlined"
            sx={{
              margin: "2px",
              transition: ".5s",
              "&:hover": { transform: "scale(1.05)" },
              "&:focus": {
                backgroundColor: "red",
                color: "black",
                transform: "scale(1.05)",
              },
            }}
          >
            Hard
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
