import React, { useState, useEffect } from 'react';
import './Stables.css';

interface Stables {
  constructorId: string;
  name: string;
}

const Stables = () => {
  const [stables, setStables] = useState<Stables[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const getStables = () => {
    fetch("https://ergast.com/api/f1/2024/constructors.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setStables(data.MRData.ConstructorTable.Constructors);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des écuries :", error);
        setError(error);
      });
  };

  useEffect(() => {
    getStables();
  }, []);

  return (
    <section>
      <h1>F1 Stables</h1>
      {error ? (
        <p>Erreur lors de la récupération des données.</p>
      ) : (
        <section className="stables-container">
          {stables.map((stable) => (
            <article className="stable-item" key={stable.constructorId}>
              {stable.name}
            </article>
          ))}
        </section>
      )}
    </section>
  );
};

export default Stables;
