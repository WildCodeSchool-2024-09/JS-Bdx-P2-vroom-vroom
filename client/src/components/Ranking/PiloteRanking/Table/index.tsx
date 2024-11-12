// Création d'un affichage Pilote

type Driver = {
  position: string;
  points: string;
  Constructors: {
    name: string;
  }[];
  Driver: {
    driverId: string;
    familyName: string;
    givenName: string;
    wins: string;
  };
};

export default function DriversDisplay({
  points,
  position,
  Driver,
  Constructors,
}: Driver) {
  return (
    <article>
      <p>{position}</p>
      <p>
        {Driver.givenName} {Driver.familyName}
      </p>
      <p>{Constructors[0].name}</p>
      <p>{points}</p>
    </article>
  );
}
