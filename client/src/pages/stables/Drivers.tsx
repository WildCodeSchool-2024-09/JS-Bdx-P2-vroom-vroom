import { useEffect, useState } from "react";
import "../stables/Stables.css/";

interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  nationality: string;
}

interface DriversProps {
  constructorId: string;
}

export default function Drivers({ constructorId }: DriversProps) {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(`https://ergast.com/api/f1/2024/constructors/${constructorId}/drivers.json`)
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data.MRData.DriverTable.Drivers);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des pilotes :", error);
        setError(error);
      });
  }, [constructorId]);

  return (
    <section className="drivers-info">
      {error ? (
        <p>Erreur lors de la récupération des données.</p>
      ) : (
        drivers.map((driver, index) => (
          <p key={driver.driverId ? driver.driverId : `driver-${index}`}>
            {driver.givenName} {driver.familyName} ({driver.nationality})
          </p>
        ))
      )}
    </section>
  );
}
