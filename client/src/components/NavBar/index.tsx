import "./App.css";

function NavBar() {
  return (
    <header>
      <img
        className="Logo"
        src="https://cdn.discordapp.com/attachments/1303013259028332678/1305905594841960478/vroom-vroom.png?ex=6734badc&is=6733695c&hm=ef462db69fb5660fd19dab1128b9ab4e86c1f901a5a53edba65ffba860d15a59&"
        alt="Logo Vroom Vroom"
      />
      <nav className="NavBar">
        <ul>
          <li>
            <a href="Calendrier">Calendrier</a>
          </li>
          <li>
            <a href="Circuits">Circuits</a>
          </li>
          <li>
            <a href="Pilotes">Pilotes</a>
          </li>
          <li>
            <a href="Ecuries">Ecuries</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
