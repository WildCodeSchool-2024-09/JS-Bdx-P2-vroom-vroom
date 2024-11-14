// Création d'un affichage Écuries
import styles from "../../Ranking.module.css";

type Team = {
  position: string;
  points: string;
  Constructor: {
    constructorId: string;
    name: string;
  };
  isLast: boolean;
};

export default function TeamsDisplay({
  position,
  points,
  Constructor,
  isLast,
}: Team) {
  return (
    <tr>
      <td className={styles.tableMainInfo}>{position}</td>
      <td
        className={
          isLast
            ? `${styles.tableMainInfo} ${styles.tableLastRow}`
            : `${styles.tableMainInfo} ${styles.tableRow}`
        }
      >
        {Constructor.name}
      </td>
      <td>{points}</td>
    </tr>
  );
}
