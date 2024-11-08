//HomePage
import { useEffect, useState } from "react";
import "./style.css";

type Race = {
  MRData: {
    RaceTable: {
      Races: { date: string; time: string }[];
    };
  };
};

export default function HomePage() {
  const [date, setDate] = useState(null as Race | null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/24.json")
      .then((response) => response.json())
      .then((data) => setDate(data))
      .catch((err) => console.error(err));
  }, []);

  const actualDate = new Date();
  const raceDate = new Date(
    `${date?.MRData.RaceTable.Races[0].date}T${date?.MRData.RaceTable.Races[0].time}`,
  );
  const diff = raceDate.getTime() - actualDate.getTime();
  const seasonCountdownDays = Math.floor(diff / (24 * 60 * 60 * 1000));
  const seasonCountdownHours = Math.floor(
    (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
  );
  const seasonCountdownMinutes = Math.floor(
    (diff % (60 * 60 * 1000)) / (60 * 1000),
  );
  const seasonCountdownSeconds = Math.floor((diff % (60 * 1000)) / 1000);

  return (
    <>
      <h1>Hello F1 world</h1>
      <p>{actualDate.toLocaleString("fr-FR")}</p>
      <p>{raceDate.toLocaleString("fr-FR")}</p>
      <p>
        {"-"}
        {seasonCountdownDays} {seasonCountdownHours}
        {":"}
        {seasonCountdownMinutes}
        {":"}
        {seasonCountdownSeconds}
      </p>
    </>
  );
}
