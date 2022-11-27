import Apple from "./Apple/Apple";
import Buttons from "./Buttons/Buttons";
import styles from "./MainPage.module.css";
import { useEffect, useState } from "react";
import Snake from "./Snake/Snake";

const MainPage = () => {
  const [direction, setDirection] = useState();

  console.log(direction);
  const upClickHandler = () => {
    setDirection("up");
  };
  const leftClickHandler = () => {
    setDirection("left");
  };
  const rightClickHandler = () => {
    setDirection("right");
  };
  const downClickHandler = () => {
    setDirection("down");
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["grid"]}>
          <Snake direction={direction} />
          <Apple />
        </div>
      </div>
      <Buttons
        onDownClick={downClickHandler}
        onRightClick={rightClickHandler}
        onUpClick={upClickHandler}
        onLeftClick={leftClickHandler}
      />
    </>
  );
};

export default MainPage;
