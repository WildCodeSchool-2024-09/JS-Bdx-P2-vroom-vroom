import DriversFormula from "../../components/drivers/DriversFormula";
import styles from "./driverspage.module.css";

export default function DriverPage() {
  return (
    <>
      <section className={styles.driversSection}>
        <DriversFormula />
      </section>
    </>
  );
}
