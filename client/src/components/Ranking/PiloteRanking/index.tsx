// Pilote Ranking
import { useEffect, useState } from "react";
import styles from "../Ranking.module.css";
import DriversDisplay from "./Table";

type Driver = {
  position: string;
  points: string;
  Constructors: {
    name: string;
  }[];
  Driver: {
    driverId: string;
    familyName: string;
    givenName: string;
    wins: string;
  };
};

export default function PiloteRanking() {
  const [rank, setRank] = useState<Driver[]>([]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/2024/driverStandings.json")
      .then((response) => response.json())
      .then((data) =>
        setRank(data.MRData.StandingsTable.StandingsLists[0].DriverStandings),
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.rankingSection}>
      <h2>Classement Pilote</h2>
      {rank.map((driver: Driver) => (
        <DriversDisplay
          key={driver.Driver.driverId}
          Driver={driver.Driver}
          position={driver.position}
          Constructors={driver.Constructors}
          points={driver.points}
        />
      ))}
    </section>
  );
}
