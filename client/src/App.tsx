import "./App.css";
import styles from "../src/components/Countdown/Countdown.module.css"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import RaceCountdown from "./components/Countdown/Race";
import SeasonCountdown from "../src/components/Countdown/Season/index";

function App() {
  return (
    <>
      <NavBar />
      <aside className={styles.countdownSection}>
      <RaceCountdown />
      {location.pathname === '/' ? <SeasonCountdown /> : null}
      </aside>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
