// Création d'un affichage Écuries

type Team = {
  position: string;
  points: string;
  Constructor: {
    constructorId: string;
    name: string;
  };
};

export default function TeamsDisplay({ position, points, Constructor }: Team) {
  return (
    <article>
      <p>{position}</p>
      <p>{Constructor.name}</p>
      <p>{points}</p>
    </article>
  );
}
