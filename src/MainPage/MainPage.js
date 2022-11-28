import Apple from "./Apple/Apple";
import Buttons from "./Buttons/Buttons";
import styles from "./MainPage.module.css";
import { useEffect, useState, useRef } from "react";
import Snake from "./Snake/Snake";

const MainPage = () => {
  const refDirection = useRef();

  const upClickHandler = () => {
    const value = refDirection.current;
    refDirection.current = "up";
    console.log(value);
  };
  const leftClickHandler = () => {
    const value = refDirection.current;
    refDirection.current = "left";
    console.log(value);
  };
  const rightClickHandler = () => {
    const value = refDirection.current;
    refDirection.current = "right";
    console.log(value);
  };
  const downClickHandler = () => {
    const value = refDirection.current;
    refDirection.current = "down";
    console.log(value);
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["grid"]}>
          <Snake direction={refDirection} />
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
