// Season Countdown
import { useEffect, useState } from "react";
import RemainingTimeLeft from "../../../services/RemainingTimeLeft";

type Date = {
  date: string;
  time: string;
};

export default function SeasonCountdown() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current/24.json")
      .then((response) => response.json())
      .then((data) => setDate(data.MRData.RaceTable.Races[0]))
      .catch((err) => console.error(err));
  }, []);

  const endSeasonDate = new Date(`${date?.date}T${date?.time}`);

  return (
    <RemainingTimeLeft
      finalDate={endSeasonDate}
      titleCountdown="Fin de la saison"
    />
  );
}
