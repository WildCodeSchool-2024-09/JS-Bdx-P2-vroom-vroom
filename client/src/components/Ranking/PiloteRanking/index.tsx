// Pilote Ranking
import { useEffect, useState } from "react";
import TableRanking from "../../../services/TableRanking";

export type DriverProps = {
  position: string;
  points: string;
  Constructors: {
    name: string;
  }[];
  Driver: {
    driverId: string;
    familyName: string;
    givenName: string;
  };
  isLast: boolean;
};

export default function PiloteRanking() {
  const [rank, setRank] = useState<DriverProps[]>([]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/2024/driverStandings.json")
      .then((response) => response.json())
      .then((data) =>
        setRank(data.MRData.StandingsTable.StandingsLists[0].DriverStandings),
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <TableRanking
      titleRanking="Classement Pilotes"
      firstCol="Position"
      secondCol="Nom / Écuries"
      thirdCol="Points"
      rows={rank}
    />
  );
}
