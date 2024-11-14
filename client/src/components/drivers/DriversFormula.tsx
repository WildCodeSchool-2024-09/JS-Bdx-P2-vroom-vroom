import { useEffect, useState } from "react";
import "./style.css";

interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  nationality: string;
  dateOfBirth: string;
  url: string;
  permanentNumber: string;
}

enum Nationalities {
  Thai = "Thaïlandais",
  Spanish = "Espagnol",
  British = "Britannique",
  Finnish = "Finlandais",
  French = "Français",
  Mexican = "Mexicain",
  Australian = "Australien",
  German = "Allemand",
  Monegasque = "Monégasque",
  Danish = "Danois",
  American = "Américain",
  Canadian = "Canadien",
  Japanese = "Japonais",
  Dutch = "Néerlandais",
  Chinese = "Chinois",
}

function calculateAge(dateOfBirth: string): number {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function formatDateToFrench(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR");
}

function App() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2024/2/drivers.json")
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data.MRData.DriverTable.Drivers);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error),
      );
  }, []);

  return (
    <>
      <h1>Liste des Pilotes F1</h1>
      <ul className="drivers">
        {drivers.map((driver) => {
          const imageUrl = `/images/${driver.driverId}.jpg`;
          const nationalityInFrench =
            Nationalities[driver.nationality as keyof typeof Nationalities] ||
            driver.nationality;
          const age = calculateAge(driver.dateOfBirth);
          const formattedBirthday = formatDateToFrench(driver.dateOfBirth);

          return (
            <li key={driver.driverId} className="driver-card">
              <img
                src={imageUrl}
                alt={`${driver.givenName} ${driver.familyName}`}
              />
              <p>
                {driver.givenName} {driver.familyName}
              </p>
              <p id="nation">{nationalityInFrench}</p>
              <article className="driver-info">
                <p>N°{driver.permanentNumber}</p>
                <p>{age}ans</p>
                <p>{formattedBirthday}</p>
                <p>
                  <a
                    href={driver.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/Wikipedia-Logo.png"
                      alt="Wikipédia"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
