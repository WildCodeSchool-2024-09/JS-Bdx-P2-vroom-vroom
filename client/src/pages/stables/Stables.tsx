import { useEffect, useState } from "react";
import "../stables/Stables.css/";
import Drivers from "./Drivers";

interface Stable {
  constructorId: string;
  name: string;
  nationality: string;
}

export default function Stables() {
  const [stables, setStables] = useState<Stable[]>([]);
  const [selectedConstructor, setSelectedConstructor] = useState<string | null>(
    null,
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getStables();
  }, []);

  const getStables = () => {
    fetch("https://ergast.com/api/f1/2024/constructors.json")
      .then((response) => response.json())
      .then((data) => {
        setStables(data.MRData.ConstructorTable.Constructors);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des écuries :", error);
        setError(error);
      });
  };

  const handleToggleInfo = (constructorId: string) => {
    setSelectedConstructor((prev) =>
      prev === constructorId ? null : constructorId,
    );
  };

  return (
    <section>
      <h2 className="h2">Les Écuries</h2>
      {error ? (
        <p>Erreur lors de la récupération des données.</p>
      ) : (
        <section className="stables-container">
          {stables.map((stable) => (
            <section
              key={stable.constructorId.toString()}
              onClick={() => handleToggleInfo(stable.constructorId)}
              onKeyDown={() => handleToggleInfo(stable.constructorId)}
            >
              <article
                className={`stable-item ${selectedConstructor === stable.constructorId ? "active" : ""}`}
              >
                <img
                  src={`/images/${stable.nationality.toLowerCase()}.png`}
                  alt={`${stable.nationality} flag`}
                  className="flag"
                />
                <img
                  src={`/images/logos/${stable.constructorId}.png`}
                  alt={`${stable.constructorId} logo`}
                  className="logo"
                />
                {stable.name}
                {selectedConstructor === stable.constructorId && (
                  <>
                    <img
                      src={`/images/${stable.name}.png`}
                      alt={`${stable.name} cars`}
                      className="cars"
                    />
                    <Drivers constructorId={stable.constructorId} />
                  </>
                )}
              </article>
            </section>
          ))}
        </section>
      )}
    </section>
  );
}
