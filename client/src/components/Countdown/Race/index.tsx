// Race Countdown
import { useEffect, useState } from "react";

type Date = {
  MRData: {
    RaceTable: {
      Races: { date: string; time: string }[];
    };
  };
};

export default function RaceCountdown() {
  const [date, setDate] = useState(null as Date | null);
  const [raceTimeLeft, setRaceTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/next.json")
      .then((response) => response.json())
      .then((data) => setDate(data))
      .catch((err) => console.error(err));
  }, []);

  const raceDate = new Date(
    `${date?.MRData.RaceTable.Races[0].date}T${date?.MRData.RaceTable.Races[0].time}`,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const actualDate = new Date();

      const diff = raceDate.getTime() - actualDate.getTime();
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((diff % (60 * 1000)) / 1000);

      setRaceTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <article>
      <p>Prochaine course</p>
      <p>{raceTimeLeft.days}</p>
      <p>{raceTimeLeft.hours}</p>
      <p>{raceTimeLeft.minutes}</p>
      <p>{raceTimeLeft.seconds}</p>
      <p>Jours</p>
      <p>Heures</p>
      <p>Minutes</p>
      <p>Secondes</p>
    </article>
  );
}
