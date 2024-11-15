// Création d'un affichage Pilote
import styles from "../../Ranking.module.css";

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

export default function DriversDisplay({
  points,
  position,
  Driver,
  Constructors,
  isLast,
}: Driver) {
  return (
    <>
      <tr>
        <td rowSpan={2} className={styles.tableMainInfo}>
          {position}
        </td>
        <td className={styles.tableMainInfo}>
          {Driver.givenName} {Driver.familyName}
        </td>
        <td rowSpan={2}>{points}</td>
      </tr>
      <tr>
        <td
          className={
            isLast
              ? `${styles.tableSecondaryInfo} ${styles.tableLastRow}`
              : `${styles.tableSecondaryInfo} ${styles.tableRow}`
          }
        >
          {Constructors[0].name}
        </td>
      </tr>
    </>
  );
}
