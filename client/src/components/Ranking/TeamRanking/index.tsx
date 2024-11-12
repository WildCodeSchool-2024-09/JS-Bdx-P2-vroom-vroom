// Team Ranking
import { useEffect, useState } from "react";
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
    <section>
      <h2>Classement Écuries</h2>
      {rank.map((team: Team) => (
        <TeamsDisplay
          key={team.Constructor.constructorId}
          position={team.position}
          Constructor={team.Constructor}
          points={team.points}
        />
      ))}
    </section>
  );
}
