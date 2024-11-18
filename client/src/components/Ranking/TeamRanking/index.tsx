// Team Ranking
import { useEffect, useState } from "react";
import styles from "../Ranking.module.css";
import TeamsDisplay from "./Table";

type Team = {
  position: string;
  points: string;
  Constructor: {
    constructorId: string;
    name: string;
  };
};

export default function TeamRanking() {
  const [rank, setRank] = useState<Team[]>([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2024/constructorStandings.json")
      .then((response) => response.json())
      .then((data) =>
        setRank(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
        ),
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.rankingSection}>
      <h2>Classement Constructeurs</h2>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Position</th>
            <th>Nom</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {rank.map((team: Team, index) => (
            <TeamsDisplay
              key={team.Constructor.constructorId}
              position={team.position}
              Constructor={team.Constructor}
              points={team.points}
              isLast={index === rank.length - 1}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
