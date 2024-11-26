//HomePage
import Countdown from "../../components/Countdown";
import Ranking from "../../components/Ranking";
import "../HomePage/style.css";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Countdown />
      <Ranking />
      <Footer />
    </>
  );
}
