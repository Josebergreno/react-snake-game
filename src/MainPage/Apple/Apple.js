import React, { useEffect, useState } from "react";
import styles from "./Apple.module.css";
import AppleIcon from "@mui/icons-material/Apple";

const Apple = (props) => {
  const [applePos, setApplePos] = useState({ x: 5, y: 5 });
  const gridSize = 21;
  const randomApple = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };
  const head = props.head;

  useEffect(() => {
    if (head.x === applePos.x && head.y === applePos.y) {
      props.onEaten();
      setApplePos(randomApple);
    }
  });

  return (
    <div
      className={styles["apple"]}
      style={{
        gridRowStart: `${applePos.x}`,
        gridColumnStart: `${applePos.y}`,
      }}
    />
  );
};

export default Apple;
