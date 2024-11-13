// Countdown
import styles from "./Countdown.module.css";
import RaceCountdown from "./Race";
import SeasonCountdown from "./Season";

export default function Countdown() {
  return (
    <section className={styles.countdownSection}>
      <h2 className={styles.countdownTitle}>Compte à rebours</h2>
      <RaceCountdown />
      <SeasonCountdown />
    </section>
  );
}
