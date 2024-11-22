import { useEffect, useState } from "react";
import "./driversmodule.css";

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
  "Argentinian " = "Argentin",
  French = "Français",
  Mexican = "Mexicain",
  Australian = "Australien",
  German = "Allemand",
  "New Zealander" = "Néo-Zélandais",
  Monegasque = "Monégasque",
  Danish = "Danois",
  American = "Américain",
  Canadian = "Canadien",
  Japanese = "Japonais",
  Dutch = "Néerlandais",
  Chinese = "Chinois",
}

const wikipediaToFrench = (url: string): string => {
  return url.replace("en.wikipedia.org", "fr.wikipedia.org");
};

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
  const [activeDriver, setActiveDriver] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2024/drivers.json")
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data.MRData.DriverTable.Drivers);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error),
      );
  }, []);

  const toggleDriverInfo = (driverId: string) => {
    setActiveDriver((prev) => (prev === driverId ? null : driverId));
  };

  return (
    <>
      <h1 className="driver-title">Liste des Pilotes F1</h1>
      <ul className="drivers">
        {drivers.map((driver) => {
          const imageUrl = `/images/${driver.driverId}.jpg`;
          const hoverImageUrl = `/hover-images/${driver.driverId}-hover.jpg`;
          const nationalityInFrench =
            Nationalities[driver.nationality as keyof typeof Nationalities] ||
            driver.nationality;
          const age = calculateAge(driver.dateOfBirth);
          const formattedBirthday = formatDateToFrench(driver.dateOfBirth);
          const frenchWikipediaUrl = wikipediaToFrench(driver.url);

          const isActive = activeDriver === driver.driverId;

          return (
            <li
              key={driver.driverId}
              className={`driver-card ${isActive ? "active" : ""}`}
              onClick={() => toggleDriverInfo(driver.driverId)}
              onKeyDown={() => toggleDriverInfo(driver.driverId)}
            >
              <section className="image-container">
                <img
                  src={imageUrl}
                  alt={`${driver.givenName} ${driver.familyName}`}
                  className="driver-main-image"
                />
                <img
                  src={hoverImageUrl}
                  alt={`${driver.givenName} ${driver.familyName}`}
                  className="driver-hover-image"
                />
              </section>
              <p className="driver-description">
                {driver.givenName} {driver.familyName}
              </p>
              <p className="nation">{nationalityInFrench}</p>
              {isActive && (
                <article className="driver-info">
                  <p className="nation">N°{driver.permanentNumber}</p>
                  <p>{age} ans</p>
                  <p>{formattedBirthday}</p>
                  <p>
                    <a
                      href={frenchWikipediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/Wikipedia-Logo.png"
                        alt="Wikipédia"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </a>
                  </p>
                </article>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;