import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <nav className="blue">
        <div className="nav-wrapper container">
          <Link
            // href="/react-food-project"
            to="/react-food-project"
            className="brand-logo"
          >
            React Food Project
          </Link>

          <ul
            id={"nav-mobile"}
            className="right hide-on-med-and-down"
          >
            {/* <li>
              <Link
                to="/movies/:title
              "
              >
                movies
              </Link>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
