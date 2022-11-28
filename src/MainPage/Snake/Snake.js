import styles from "./Snake.module.css";
import { useState, useEffect } from "react";

let snakeStartPos = [
  { x: 11, y: 11 },
  { x: 11, y: 12 },
  { x: 11, y: 13 },
];

const snakeSpeed = {
  slow: 1000,
  normal: 500,
  fast: 250,
};

const Snake = (props) => {
  const [snakeSpeedState, setSnakeSpeedState] = useState(snakeSpeed.fast);
  const [snakePos, setSnakePos] = useState(snakeStartPos);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(props.direction.current);
      props.direction.current === "down" &&
        setSnakePos((prev) => [
          ...prev,
          {
            x: prev[prev.length - 1].x + 1,
            y: prev[prev.length - 1].y,
          },
        ]);

      props.direction.current === "up" &&
        setSnakePos((prev) => [
          ...prev,
          {
            x: prev[prev.length - 1].x - 1,
            y: prev[prev.length - 1].y,
          },
        ]);

      props.direction.current === "left" &&
        setSnakePos((prev) => [
          ...prev,
          {
            x: prev[prev.length - 1].x,
            y: prev[prev.length - 1].y - 1,
          },
        ]);

      props.direction.current === "right" &&
        setSnakePos((prev) => [
          ...prev,
          {
            x: prev[prev.length - 1].x,
            y: prev[prev.length - 1].y + 1,
          },
        ]);
    }, snakeSpeedState);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const snakeBody = snakePos.map((segment) => (
    <div
      key={Math.random()}
      className={styles["snake"]}
      style={{
        gridRowStart: `${segment.x}`,
        gridColumnStart: `${segment.y}`,
      }}
    ></div>
  ));

  return snakeBody;
};

export default Snake;
