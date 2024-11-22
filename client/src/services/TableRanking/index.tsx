import type { DriverProps } from "../../components/Ranking/PiloteRanking";
// Table Ranking
import styles from "../../components/Ranking/Ranking.module.css";
import type { TeamProps } from "../../components/Ranking/TeamRanking";
import BodyTable from "./BodyTable";

type TableRankingProps = {
  titleRanking: string;
  firstCol: string;
  secondCol: string;
  thirdCol: string;

  rows: TeamProps[] | DriverProps[];
};

export default function TableRanking({
  titleRanking,
  firstCol,
  secondCol,
  thirdCol,
  rows,
}: TableRankingProps) {
  return (
    <section className={styles.rankingSection}>
      <h2>{titleRanking}</h2>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th scope="col">{firstCol}</th>
            <th scope="col">{secondCol}</th>
            <th scope="col">{thirdCol}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((team, index) => (
            <BodyTable
              key={
                "Constructor" in team
                  ? team.Constructor.constructorId
                  : team.Driver.driverId
              }
              team={team}
              isLast={index === rows.length - 1}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
