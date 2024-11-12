//HomePage
import Countdown from "../Countdown";
import Ranking from "../Ranking";
import "./style.css";

export default function HomePage() {
  return (
    <>
      <h1>Vroom vroom</h1>
      <Countdown />
      <Ranking />
    </>
  );
}
