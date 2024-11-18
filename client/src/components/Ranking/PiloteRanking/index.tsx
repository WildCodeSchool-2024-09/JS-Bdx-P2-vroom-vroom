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
  isLast: boolean;
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
      <h2>Classement Pilotes</h2>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Position</th>
            <th>Nom / Ecuries</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {rank.map((driver: Driver, index) => (
            <DriversDisplay
              key={driver.Driver.driverId}
              Driver={driver.Driver}
              position={driver.position}
              Constructors={driver.Constructors}
              points={driver.points}
              isLast={index === rank.length - 1}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
