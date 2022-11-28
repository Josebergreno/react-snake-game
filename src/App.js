import styles from "./App.module.css";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import ModalWindow from "./MainPage/Modal/ModalWindow";

const App = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
