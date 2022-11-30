import React, { useState } from "react";
import styles from "./Apple.module.css";

const Apple = (props) => {
  const [applePos, setApplePos] = useState({ x: 5, y: 5 });
  const gridSize = 21;
  const head = props.head;
  const snakePos = props.snakePos;
  const tail = snakePos.slice(-0, -1);

  // eslint-disable-next-line
  const randomApple = {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
  tail.forEach((val) => {
    if (val.x === applePos.x && val.y === applePos.y) {
      setApplePos(randomApple);
    }
  });

  if (head.x === applePos.x && head.y === applePos.y) {
    props.onEaten();
    setApplePos(randomApple);
  }

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
