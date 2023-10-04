import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { currentTheme, toggleTheme } = useTheme();
  const iconTheme = currentTheme === "dark" ? faSun : faMoon;

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const removeActiveLinkClass = (e) => {
    if (e.target.classList.contains("list-link")) {
      setIsMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", removeActiveLinkClass);

    return () => {
      document.removeEventListener("click", removeActiveLinkClass);
    };
  }, []);

  return (
    <header className="header" id="home" data-theme={currentTheme}>
      <nav className="navbar container">
        <Link to={"/"} className="logo">
          João.
        </Link>

        <div className="navbar-buttons">
          <button
            type="button"
            className={`button icon-button menu-toggle-button ${
              isMenuActive ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars open-icon"></i>
            <i className="fa-solid fa-xmark close-icon"></i>
          </button>

          <button
            type="button"
            className={`button icon-button theme-toggle-button`}
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={iconTheme}
              style={{ fontSize: "2.4rem", margin: "auto" }}
            />
          </button>
        </div>

        <div className={`menu ${isMenuActive ? "active" : ""}`}>
          <ul className="list">
            <li className="list-item">
              <Link to={"/about"} className="list-link">
                <span>01</span> About
              </Link>
            </li>

            <li className="list-item">
              <Link to={"/projects"} className="list-link">
                <span>02</span> Projects
              </Link>
            </li>

            <li className="list-item">
              <Link to={"/articles"} className="list-link">
                <span>03</span> Articles
              </Link>
            </li>

            <li className="list-item">
              <Link to={"/newsletter"} className="list-link">
                <span>04</span> Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
