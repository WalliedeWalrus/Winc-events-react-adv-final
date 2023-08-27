import { Link, NavLink } from "react-router-dom";
import "../index.css";

export const Navigation = () => {
  return (
    <nav className="header-nav">
      <div className="nav-contents">
        <div className="nav-links">
          <ul>
            <li>
              <NavLink
                as={Link}
                className="header-nav-link"
                to="/"
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                as={Link}
                className="header-nav-link"
                to="/events"
                activeclassname="active"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                as={Link}
                className="header-nav-link"
                to="/info"
                activeclassname="active"
              >
                Info
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
