//HomePage
import Countdown from "../../components/Countdown";
import Ranking from "../../components/Ranking";
import "../../App.css";
import Stables from "../stables/Stables";

export default function HomePage() {
  return (
    <>
      <Countdown />
      <Ranking />
      <Stables />
    </>
  );
}
