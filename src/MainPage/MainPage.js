import Apple from "./Apple/Apple";
import Buttons from "./Buttons/Buttons";
import styles from "./MainPage.module.css";
import { useEffect, useState, useRef } from "react";
import Snake from "./Snake/Snake";

const MainPage = () => {
  const [direction, setDirection] = useState("right");

  const upClickHandler = () => {
    setDirection("up");
    console.log(direction);
  };
  const leftClickHandler = () => {
    setDirection("left");
    console.log(direction);
  };
  const rightClickHandler = () => {
    setDirection("right");
    console.log(direction);
  };
  const downClickHandler = () => {
    setDirection("down");
    console.log(direction);
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
