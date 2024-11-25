import { useEffect, useState } from "react";
import type { Circuit } from "../../pages/circuitPage/types";
import styles from "./CircuitList.module.css";

export default function CircuitList() {
  const [circuits, setCircuits] = useState<(Circuit & { image: string })[]>([]);
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
        const circuitsData = data.MRData.CircuitTable.Circuits.map(
          (circuit: Circuit) => {
            const imageName = circuit.circuitId;
            const imagePath = `/imagesCircuits/${imageName}.jpg`;
            return {
              ...circuit,
              image: imagePath,
            };
          },
        );
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
      <main className={styles.circuitGrid}>
        {circuits.map((circuit) => (
          <figure key={circuit.circuitId} className={styles.circuitItem}>
            <img
              src={circuit.image}
              alt={`Vue du circuit ${circuit.circuitName}`}
              className={styles.circuitImage}
            />
            <h2>{circuit.circuitName}</h2>
            <figcaption>
              {circuit.Location.locality}, {circuit.Location.country}
            </figcaption>
          </figure>
        ))}
      </main>
    </>
  );
}
