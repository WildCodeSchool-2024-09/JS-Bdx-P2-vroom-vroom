// Remaining Time Left
import { useEffect, useState } from "react";
import styles from "../Countdown.module.css";

type TimeLeft = {
  finalDate: Date;
  titleCountdown: string;
};

export default function RemainingTimeLeft({
  finalDate,
  titleCountdown,
}: TimeLeft) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const actualDate = new Date();

      const diff = finalDate.getTime() - actualDate.getTime();
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [finalDate]);

  return (
    <article className={styles.countdownArticle}>
      <p className={styles.countdownText}>{titleCountdown}</p>
      <p className={styles.countdownTimeLeft}>{timeLeft.days}</p>
      <p className={styles.countdownTimeLeft}>{timeLeft.hours}</p>
      <p className={styles.countdownTimeLeft}>{timeLeft.minutes}</p>
      <p className={styles.countdownTimeLeft}>{timeLeft.seconds}</p>
      <p className={styles.countdownText}>Jours</p>
      <p className={styles.countdownText}>Heures</p>
      <p className={styles.countdownText}>Minutes</p>
      <p className={styles.countdownText}>Secondes</p>
    </article>
  );
}
