import { useEffect, useState } from "react";
import RaceResults from "../RaceResults";
import "./App.css";

type Race = {
  raceName: string;
  date: string;
  Circuit: {
    circuitId: string;
  };
  round: string;
};
function RaceCalendar() {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2024.json")
      .then((response) => response.json())
      .then((data) => {
        const raceCalendar = data.MRData.RaceTable.Races;
        setRaces(raceCalendar);
      });
  }, []);
  const formatDate = (date: string): string => {
    return date.split("-").reverse().join("/");
  };
  return (
    <>
      <section className="calendar">
        <h2 className="titleCalendar">F1 Calendrier 2024</h2>
        {races.map((race) => (
          <article className="raceName" key={race.raceName}>
            <p className="roundCalendar">R{race.round}</p>
            <img
              src={`/circuits/${race.Circuit.circuitId}.svg`}
              className="raceImages"
              alt="Races Images"
            />
            <article className="coursesDate">
              <h3 className="coursesTitle">{race.raceName}</h3>
              <p className="date">{formatDate(race.date)}</p>
            </article>
            <RaceResults round={race.round} />
          </article>
        ))}
      </section>
    </>
  );
}

export default RaceCalendar;
