import DriversFormula from "../../components/drivers/DriversFormula";
import RaceCountdown from "../../components/Countdown/Race";
import styles from "./driverspage.module.css";

export default function DriverPage() {
  return (
    <>
      <section className={styles.raceCountdownContainer}>
        <RaceCountdown />
      </section>
      <section className={styles.driversSection}>
        <DriversFormula />
      </section>
    </>
  );
}