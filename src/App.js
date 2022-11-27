import styles from "./App.module.css";
import Header from "./Header/Header";
import Buttons from "./MainPage/Buttons/Buttons";
import MainPage from "./MainPage/MainPage";

const App = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
