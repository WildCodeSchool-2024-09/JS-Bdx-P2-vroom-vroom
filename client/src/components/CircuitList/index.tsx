import { useCallback, useEffect, useState } from "react";
import type { Circuit } from "../../pages/circuitPage/types";
import styles from "./CircuitList.module.css";

export default function CircuitList() {
  const [circuits, setCircuits] = useState<Circuit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCircuits = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://ergast.com/api/f1/2024/circuits.json",
      );
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      const data = await response.json();
      const circuitsData = data.MRData.CircuitTable.Circuits;
      setCircuits(circuitsData);
    } catch (error) {
      setError("Impossible de récupérer les données.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCircuits();
  }, [fetchCircuits]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className={styles.title}>Circuits F1 - Saison 2024</h1>
      <ul className={styles["circuit-grid"]}>
        {circuits.map((circuit) => (
          <li key={circuit.circuitId} className={styles["circuit-item"]}>
            <h3>{circuit.circuitName}</h3>
            <p>
              {circuit.Location.locality}, {circuit.Location.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
