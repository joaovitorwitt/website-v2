import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

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
    <header className="header" id="home">
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

          {/* <button type="button" class="button icon-button theme-toggle-button">
            <i class="fa-solid fa-sun theme-off"></i>
            <i class="fa-solid fa-moon theme-on"></i>
          </button> */}
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
