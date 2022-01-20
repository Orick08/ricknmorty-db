import { Link } from "react-router-dom";
import "./../App.css";

function Navbar() {
  return (
    <nav>
      <h3>Rick & Morty site</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Index</li>
        </Link>
        <Link to="/seassons">
          <li>Seassons</li>
        </Link>
        <Link to="/episodes">
          <li>Episodes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
