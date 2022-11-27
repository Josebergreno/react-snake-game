import React, { useEffect, useState } from "react";
import styles from "./Apple.module.css";

const Apple = () => {
  const [applePos, setApplePos] = useState({ x: 5, y: 5 });
  const gridSize = 21;
  const randomApple = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };

  useEffect(() => eaten(), []);

  const eaten = () => {
    setApplePos(randomApple);
  };

  console.log(applePos);

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
