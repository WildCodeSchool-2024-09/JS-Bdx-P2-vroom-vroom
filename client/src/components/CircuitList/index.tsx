import { useEffect, useState } from "react";
import type { Circuit } from "../../pages/circuitPage/types";
import styles from "./CircuitList.module.css";

export default function CircuitList() {
  const [circuits, setCircuits] = useState<Circuit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2024/circuits.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const circuitsData = data.MRData.CircuitTable.Circuits;
        setCircuits(circuitsData);
        setError(null);
      })
      .catch(() => setError("Impossible de récupérer les données."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className={styles.title}>Circuits F1 - Saison 2024</h1>
      <ul className={styles.circuitGrid}>
        {circuits.map((circuit) => (
          <li key={circuit.circuitId} className={styles.circuitItem}>
            <h3>{circuit.circuitName}</h3>
            <p>
              {circuit.Location.locality}, {circuit.Location.country}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
