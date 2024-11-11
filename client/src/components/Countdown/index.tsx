// Countdown
import RaceCountdown from "./Race";
import SeasonCountdown from "./Season";
import "./style.css";

export default function Countdown() {
  return (
    <section>
      <h2>Compte à rebours</h2>
      <RaceCountdown />
      <SeasonCountdown />
    </section>
  );
}
