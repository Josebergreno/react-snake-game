import Buttons from "./Buttons/Buttons";
import styles from "./MainPage.module.css";
import { useRef } from "react";
import Snake from "./Snake/Snake";

const MainPage = () => {
  const refDirection = useRef("start");

  const keyPressHandler = (e) => {
    e.key === "ArrowUp" && upClickHandler();
    e.key === "ArrowRight" && rightClickHandler();
    e.key === "ArrowDown" && downClickHandler();
    e.key === "ArrowLeft" && leftClickHandler();
    e.key === "Shift" && pauseHandler();
    e.key === "1" && restartHandler();
  };

  const restartHandler = () => {
    refDirection.current = "restart";
  };

  const pauseHandler = () => {
    refDirection.current = "pause";
  };

  const gameOverHandler = () => {
    refDirection.current = "gameOver";
  };

  const upClickHandler = () => {
    refDirection.current = "up";
  };
  const leftClickHandler = () => {
    refDirection.current = "left";
  };
  const rightClickHandler = () => {
    refDirection.current = "right";
  };
  const downClickHandler = () => {
    refDirection.current = "down";
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["grid"]}>
          <Snake
            direction={refDirection}
            onGameOver={gameOverHandler}
            onRestart={restartHandler}
            onPause={pauseHandler}
          />
        </div>
      </div>
      <Buttons
        onDownClick={downClickHandler}
        onRightClick={rightClickHandler}
        onUpClick={upClickHandler}
        onLeftClick={leftClickHandler}
        onPause={pauseHandler}
        onRestart={restartHandler}
        onKeyPress={keyPressHandler}
      />
    </>
  );
};

export default MainPage;
