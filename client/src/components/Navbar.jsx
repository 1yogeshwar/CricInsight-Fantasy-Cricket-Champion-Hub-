import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import logos from '../images/logos.png';
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="nav_bg">
      <div className="row">
        <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
            <div className="container-fluid">
              <NavLink className="navbar-brand" exact to="/">
              <img src={logos} alt="Navbar Logo" style={{ width: '200px', height: 'auto' }} />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                      exact
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/team"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Stats
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          to="/service"
                          className="dropdown-item"
                          activeClassName="active"
                        >
                          Teams
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pitch"
                          className="dropdown-item"
                          activeClassName="active"
                        >
                          Pitch Report
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/csk"
                          className="dropdown-item"
                          activeClassName="active"
                        >
                          Player Matchups
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/night"
                          className="dropdown-item"
                          activeClassName="active"
                        >
                          Tactics and Facts
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about"
                      className="nav-link"
                      activeClassName="active"
                    >
                      About
                    </NavLink>
                  </li>

                  {isLoggedIn ? (
                    <li className="nav-item">
                      <NavLink
                        to="/logout"
                        className="nav-link"
                        activeClassName="active"
                      >
                        Logout
                      </NavLink>
                    </li>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to="/register"
                          className="nav-link"
                          activeClassName="active"
                        >
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/login"
                          className="nav-link"
                          activeClassName="active"
                        >
                          Login
                        </NavLink>
                      </li>
                      <li className="nav-item">
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Contact
                    </NavLink>
                  </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
