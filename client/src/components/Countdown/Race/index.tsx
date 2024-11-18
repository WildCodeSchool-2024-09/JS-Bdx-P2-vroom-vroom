// Race Countdown
import { useEffect, useState } from "react";
import RemainingTimeLeft from "../RemainingTimeLeft";

type Date = {
  date: string;
  time: string;
};

export default function RaceCountdown() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/next.json")
      .then((response) => response.json())
      .then((data) => setDate(data.MRData.RaceTable.Races[0]))
      .catch((err) => console.error(err));
  }, []);

  const raceDate = new Date(`${date?.date}T${date?.time}`);

  return (
    <RemainingTimeLeft finalDate={raceDate} titleCountdown="Prochaine course" />
  );
}
