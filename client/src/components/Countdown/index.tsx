// Countdown
import styles from "./Countdown.module.css";
import RaceCountdown from "./Race";
import SeasonCountdown from "./Season";

export default function Countdown() {
  return (
    <section className={styles.CountdownSection}>
      <h2 className={styles.CountdownTitle}>Compte à rebours</h2>
      <RaceCountdown />
      <SeasonCountdown />
    </section>
  );
}
