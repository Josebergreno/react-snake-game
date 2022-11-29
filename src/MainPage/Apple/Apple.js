import React, { useState } from "react";
import styles from "./Apple.module.css";

const Apple = (props) => {
  const [applePos, setApplePos] = useState({ x: 5, y: 5 });
  const gridSize = 21;

  const head = props.head;

  // eslint-disable-next-line
  const randomApple = {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
  console.log(randomApple);
  console.log(head.x === applePos.x && head.y === applePos.y);

  console.log([head.x, head.y]);
  console.log([applePos.x, applePos.y]);

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
