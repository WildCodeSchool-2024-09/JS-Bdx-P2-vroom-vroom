import { useState } from "react";
import "../RaceResults/App.css";

type RaceResults = {
  position: string;
  points: string;
  Driver: {
    givenName: string;
    familyName: string;
  };
};
type RaceResultsProps = {
  round: string;
};
function RaceResults({ round }: RaceResultsProps) {
  const [results, setResults] = useState<RaceResults[] | null>(null);

  const handleOnClick = () => {
    if (results) {
      setResults(null);
    } else {
      fetch(`https://ergast.com/api/f1/2024/${round}/results.json`)
        .then((response) => response.json())
        .then((data) => {
          const raceResults = data.MRData.RaceTable.Races[0]?.Results;
          setResults(raceResults);
        });
    }
  };

  return (
    <main className="containerResults">
      <button type="button" onClick={handleOnClick} className="button">
        {results ? (
          <img
            className="imageButton"
            src="/checkered-flag-309862.svg"
            alt="cacher"
          />
        ) : (
          <img
            className="imageButton"
            src="/checkered-flag-309862.svg"
            alt="voir"
          />
        )}
      </button>
      {results && (
        <section
          onClick={() => setResults(null)}
          onKeyDown={() => setResults(null)}
        >
          <article
            className="affichage"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="otherButton"
              onClick={() => setResults(null)}
            >
              <ul className="resultsList">
                {results.map((result) => (
                  <li key={result.position} className="result-item">
                    {result.position}. {result.Driver.givenName}{" "}
                    {result.Driver.familyName}
                    <span className="pointsCircuits"> {result.points}pts</span>
                  </li>
                ))}
              </ul>
            </button>
          </article>
        </section>
      )}
    </main>
  );
}

export default RaceResults;
