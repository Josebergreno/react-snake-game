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
  const [snakeSpeedState, setSnakeSpeedState] = useState(snakeSpeed.slow);
  const [snakePos, setSnakePos] = useState(snakeStartPos);

  useEffect(() => {
    const interval = setInterval(() => {
      const shift = () => snakeStartPos.shift();
      if (props.direction == "left") {
        return setSnakePos(moveLeft() && shift());
      }
      if (props.direction == "right") {
        return setSnakePos(moveRight() && shift());
      }
      if (props.direction == "down") {
        return setSnakePos(moveDown() && shift());
      }
    }, snakeSpeed.slow);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const moveLeft = () =>
    snakeStartPos.push({
      x: snakeStartPos[snakeStartPos.length - 1].x,
      y: snakeStartPos[snakeStartPos.length - 1].y - 1,
    });

  const moveDown = () =>
    snakeStartPos.push({
      x: snakeStartPos[snakeStartPos.length - 1].x + 1,
      y: snakeStartPos[snakeStartPos.length - 1].y,
    });

  const moveUp = () =>
    snakeStartPos.push({
      x: snakeStartPos[snakeStartPos.length - 1].x - 1,
      y: snakeStartPos[snakeStartPos.length - 1].y,
    });
  const moveRight = () =>
    snakeStartPos.push({
      x: snakeStartPos[snakeStartPos.length - 1].x,
      y: snakeStartPos[snakeStartPos.length - 1].y + 1,
    });

  const snakeBody = snakeStartPos.map((segment) => (
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
