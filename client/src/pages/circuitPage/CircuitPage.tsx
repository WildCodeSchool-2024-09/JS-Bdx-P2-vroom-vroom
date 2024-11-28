import CircuitList from "../../components/CircuitList";
import styles from "./CircuitPage.module.css";

export default function CircuitPage() {
  return (
    <>
      <section className={styles.circuitListContainer}>
        <CircuitList />
      </section>
    </>
  );
}
