import type { DriverProps } from "../../../components/Ranking/PiloteRanking";
// Body Table
import styles from "../../../components/Ranking/Ranking.module.css";
import type { TeamProps } from "../../../components/Ranking/TeamRanking";

export type BodyTableProps = {
  team: TeamProps | DriverProps;
  isLast: boolean;
};

export default function BodyTable({ team, isLast }: BodyTableProps) {
  return (
    <>
      {"Constructor" in team ? (
        <tr>
          <td className={styles.tableMainInfo}>{team.position}</td>
          <td
            className={
              isLast
                ? `${styles.tableMainInfo} ${styles.tableLastRow}`
                : `${styles.tableMainInfo} ${styles.tableRow}`
            }
          >
            {team.Constructor.name}
          </td>
          <td>{team.points}</td>
        </tr>
      ) : (
        <>
          <tr>
            <td rowSpan={2} className={styles.tableMainInfo}>
              {team.position}
            </td>
            <td className={styles.tableMainInfo}>
              {team.Driver.givenName} {team.Driver.familyName}
            </td>
            <td rowSpan={2}>{team.points}</td>
          </tr>
          <tr>
            <td
              className={
                isLast
                  ? `${styles.tableSecondaryInfo} ${styles.tableLastRow}`
                  : `${styles.tableSecondaryInfo} ${styles.tableRow}`
              }
            >
              {team.Constructors[0].name}
            </td>
          </tr>
        </>
      )}
    </>
  );
}
