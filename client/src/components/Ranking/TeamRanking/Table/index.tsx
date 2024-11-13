// Création d'un affichage Écuries
import styles from "../../Ranking.module.css";

type Team = {
  position: string;
  points: string;
  Constructor: {
    constructorId: string;
    name: string;
  };
};

export default function TeamsDisplay({ position, points, Constructor }: Team) {
  return (
    <article className={styles.rankingArticle}>
      <p className={styles.rankingPos}>{position}</p>
      <p className={styles.rankingName}>{Constructor.name}</p>
      <p className={styles.rankingPoints}>{points}</p>
    </article>
  );
}
