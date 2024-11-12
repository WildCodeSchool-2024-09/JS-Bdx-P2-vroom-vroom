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
    <article className={styles.RankingArticle}>
      <p className={styles.RankingPos}>{position}</p>
      <p className={styles.RankingName}>{Constructor.name}</p>
      <p className={styles.RankingPoints}>{points}</p>
    </article>
  );
}
