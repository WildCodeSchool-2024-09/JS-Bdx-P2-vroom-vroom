import "./app.css";

function Footer() {
  return (
    <footer className="basDePage">
      <p>
        {" "}
        Remerciment à{" "}
        <a href="https://ergast.com/mrd/" className="lien">
          {" "}
          Ergast Developer API
        </a>
      </p>
      <p>
        <a className="retourHautPage" href="#top">
          Retour en haut de page
        </a>
      </p>
    </footer>
  );
}
export default Footer;
