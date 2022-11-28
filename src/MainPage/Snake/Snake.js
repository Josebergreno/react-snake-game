import styles from "./Snake.module.css";
import { useState, useEffect } from "react";
import ModalWindow from "../Modal/ModalWindow";

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
  const [gameOver, setGameOver] = useState(false);
  const head = snakePos[snakePos.length - 1];

  if (
    22 <= Math.abs(head.x) ||
    22 <= Math.abs(head.y) ||
    0 === head.x ||
    0 === head.y
  ) {
    setSnakePos(snakeStartPos);
    props.onGameOver();
    setGameOver(true);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      props.direction.current === "gameOver" && setSnakePos(snakePos);

      props.direction.current === "down" &&
        setSnakePos((prev) => [
          ...prev.slice(1),
          {
            x: prev[prev.length - 1].x + 1,
            y: prev[prev.length - 1].y,
          },
        ]);

      props.direction.current === "up" &&
        setSnakePos((prev) => [
          ...prev.slice(1),
          {
            x: prev[prev.length - 1].x - 1,
            y: prev[prev.length - 1].y,
          },
        ]);

      props.direction.current === "left" &&
        setSnakePos((prev) => [
          ...prev.slice(1),
          {
            x: prev[prev.length - 1].x,
            y: prev[prev.length - 1].y - 1,
          },
        ]);

      props.direction.current === "right" &&
        setSnakePos((prev) => [
          ...prev.slice(1),
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

  return (
    <>
      {snakeBody}
      {gameOver === true && <ModalWindow onGameOver={gameOver} />}
    </>
  );
};

export default Snake;
