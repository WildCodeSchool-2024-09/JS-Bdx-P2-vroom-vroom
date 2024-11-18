// Remaining Time Left
import { useEffect, useState } from "react";
import styles from "../../components/Countdown/Countdown.module.css";

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
      <time className={styles.countdownTimeLeft} dateTime="ww dd hh mm ss">
        <span>{timeLeft.days}</span>
        <span>{timeLeft.hours}</span>
        <span>{timeLeft.minutes}</span>
        <span>{timeLeft.seconds}</span>
      </time>
      <p className={styles.countdownText}>Jours</p>
      <p className={styles.countdownText}>Heures</p>
      <p className={styles.countdownText}>Minutes</p>
      <p className={styles.countdownText}>Secondes</p>
    </article>
  );
}
