import React, { useEffect, useState } from "react";
import styles from "./Apple.module.css";

const Apple = (props) => {
  const [applePos, setApplePos] = useState({ x: 5, y: 5 });
  const gridSize = 21;

  const head = props.head;

  // eslint-disable-next-line
  const randomApple = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };

  useEffect(() => {
    if (head.x === applePos.x && head.y === applePos.y) {
      props.onEaten();
      setApplePos(randomApple);
    }
  }, [head.x, head.y, applePos.x, applePos.y, props, randomApple]);

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
