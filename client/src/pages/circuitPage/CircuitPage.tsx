import CircuitList from "../../components/CircuitList";
import RaceCountdown from "../../components/Countdown/Race";
import styles from "./CircuitPage.module.css";

export default function CircuitPage() {
  return (
    <div className={styles.circuitPageContainer}>
      <section className={styles.raceCountdownContainer}>
        <RaceCountdown />
      </section>

      <section className={styles.circuitListContainer}>
        <CircuitList />
      </section>
    </div>
  );
}
