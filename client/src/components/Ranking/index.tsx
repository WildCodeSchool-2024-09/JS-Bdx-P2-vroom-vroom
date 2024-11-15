// Ranking
import PiloteRanking from "./PiloteRanking";
import styles from "./Ranking.module.css";
import TeamRanking from "./TeamRanking";

export default function Ranking() {
  return (
    <section className={styles.rankingGlobalSection}>
      <PiloteRanking />
      <TeamRanking />
    </section>
  );
}
