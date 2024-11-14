// Season Countdown
import { useEffect, useState } from "react";
import styles from "../Countdown.module.css";

type Date = {
  date: string;
  time: string;
};

export default function SeasonCountdown() {
  const [date, setDate] = useState<Date | null>(null);
  const [endSeasonTimeLeft, setEndSeasonTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/24.json")
      .then((response) => response.json())
      .then((data) => setDate(data.MRData.RaceTable.Races[0]))
      .catch((err) => console.error(err));
  }, []);

  const endSeasonDate = new Date(`${date?.date}T${date?.time}`);

  useEffect(() => {
    const interval = setInterval(() => {
      const actualDate = new Date();

      const diff = endSeasonDate.getTime() - actualDate.getTime();
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);

      setEndSeasonTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [endSeasonDate]);

  return (
    <article className={styles.countdownArticle}>
      <p className={styles.countdownText}>Fin de la saison</p>
      <p className={styles.countdownTimeLeft}>{endSeasonTimeLeft.days}</p>
      <p className={styles.countdownTimeLeft}>{endSeasonTimeLeft.hours}</p>
      <p className={styles.countdownTimeLeft}>{endSeasonTimeLeft.minutes}</p>
      <p className={styles.countdownTimeLeft}>{endSeasonTimeLeft.seconds}</p>
      <p className={styles.countdownText}>Jours</p>
      <p className={styles.countdownText}>Heures</p>
      <p className={styles.countdownText}>Minutes</p>
      <p className={styles.countdownText}>Secondes</p>
    </article>
  );
}
