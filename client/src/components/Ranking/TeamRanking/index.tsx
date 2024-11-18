// Team Ranking
import { useEffect, useState } from "react";
import TableRanking from "../../../services/TableRanking";

export type TeamProps = {
  position: string;
  points: string;
  Constructor: {
    constructorId: string;
    name: string;
  };
};

export default function TeamRanking() {
  const [rank, setRank] = useState<TeamProps[]>([]);

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
    <TableRanking
      titleRanking="Classement Constructeurs"
      firstCol="Position"
      secondCol="Nom"
      thirdCol="Points"
      rows={rank}
    />
  );
}
