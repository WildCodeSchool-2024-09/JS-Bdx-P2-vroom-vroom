import "./App.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/vroom-vroom.png";

function NavBar() {
  return (
    <>
      <header className="hautPage">
        <Link to="/home">
          <img className="logo" src={logo} alt="Logo Vroom Vroom" />
        </Link>
        <nav className="NavBar">
          <ul className="liens">
            <Link to="/calendar" className="lien">
              Calendrier
            </Link>
            <Link to="/circuits" className="lien">
              Circuits
            </Link>
            <Link to="/pilotes" className="lien">
              Pilotes
            </Link>
            <Link to="/écuries" className="lien">
              Ecuries
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default NavBar;
