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
  const handleOpen = () => setOpen(true);
  const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles["modal-header"]}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You Lose!!!!!!
            </Typography>
          </div>
          <div className={styles["try-again--btn"]}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button onClick={handleClose} variant="outlined">
                Try Again
              </Button>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
