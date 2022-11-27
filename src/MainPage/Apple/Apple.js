import React, { useEffect } from "react";
import styles from "./Apple.module.css";

const Apple = () => {
  const gridSize = 21;
  const randomApple = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };

  return (
    <div
      className={styles["apple"]}
      style={{
        gridRowStart: `${randomApple.x}`,
        gridColumnStart: `${randomApple.y}`,
      }}
    />
  );
};

export default Apple;
