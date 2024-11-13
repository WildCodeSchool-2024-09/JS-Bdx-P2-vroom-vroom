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
};

export default function DriversDisplay({
  points,
  position,
  Driver,
  Constructors,
}: Driver) {
  return (
    <article className={styles.rankingArticle}>
      <p className={styles.rankingPos}>{position}</p>
      <p className={styles.rankingName}>
        {Driver.givenName} {Driver.familyName}
      </p>
      <p className={styles.rankingConstructor}>{Constructors[0].name}</p>
      <p className={styles.rankingPoints}>{points}</p>
    </article>
  );
}
