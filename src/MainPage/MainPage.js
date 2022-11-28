import Apple from "./Apple/Apple";
import Buttons from "./Buttons/Buttons";
import styles from "./MainPage.module.css";
import { useRef } from "react";
import Snake from "./Snake/Snake";

const MainPage = () => {
  const refDirection = useRef();

  const restartHandler = () => {
    const value = refDirection.current;
    refDirection.current = "restart";
  };

  const pauseHandler = () => {
    const value = refDirection.current;
    refDirection.current = "pause";
  };

  const gameOverHandler = () => {
    const value = refDirection.current;
    refDirection.current = "gameOver";
  };

  const upClickHandler = () => {
    const value = refDirection.current;
    refDirection.current = "up";
  };
  const leftClickHandler = () => {
    const value = refDirection.current;
    refDirection.current = "left";
  };
  const rightClickHandler = () => {
    const value = refDirection.current;
    refDirection.current = "right";
  };
  const downClickHandler = () => {
    const value = refDirection.current;
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
      />
    </>
  );
};

export default MainPage;
