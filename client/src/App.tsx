import "./App.css";
import { Outlet } from "react-router-dom";
import styles from "../src/components/Countdown/Countdown.module.css";
import SeasonCountdown from "../src/components/Countdown/Season/index";
import RaceCountdown from "./components/Countdown/Race";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <aside className={styles.countdownSection}>
        <RaceCountdown />
        {location.pathname === "/" ? <SeasonCountdown /> : null}
      </aside>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
