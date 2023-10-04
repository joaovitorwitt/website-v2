import { useEffect } from "react";
import Profile from "../assets/images/profile-picture.jpg";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "..";

export default function About() {
  const { currentTheme } = useTheme();
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".about-me-picture", { origin: "top" });
    sr.reveal(".about-me-data-container", { origin: "right" });
  });

  return (
    <div className="about-page-wrapper" data-theme={currentTheme}>
      <Header />
      <div className="container">
        <div className="about-me-wrapper">
          <div className="profile-picture">
            <img src={Profile} alt="" className="about-me-picture" />
          </div>

          <div className="about-me-data-container">
            <h3>João Vitor Witt (pronounced: John)</h3>

            <p className="about-me-description">
              I'm enthusiastic about the captivating realms of Web3 and AI.
              While exploring deeper into the Computer Science realm.{" "}
              <Link to={"/articles"} className="article-redirection">
                Check out my articles
              </Link>
            </p>

            <div className="lower-section-data-container">
              <div className="social-media">
                <h4 className="about-me-footer">Connect with me</h4>
                <ul className="list">
                  <li className="list-item">
                    <a
                      href="https://github.com/joaovitorwitt"
                      target="_blank"
                      className="list-link"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>

                  <li className="list-item">
                    <a
                      href="https://www.youtube.com/channel/UCPeHjk3fEPzK0RKHpQG7gJw"
                      target="_blank"
                      className="list-link"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>

                  <li className="list-item">
                    <a
                      href="https://www.linkedin.com/in/joaovitorwitt/"
                      target="_blank"
                      className="list-link"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://twitter.com/joaovitorwitt"
                      target="_blank"
                      className="list-link"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/joaaovitorwitt/"
                      target="_blank"
                      className="list-link"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="message-me">
                <h4>Send me a message</h4>

                <div className="message-me-data-container">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+55 54 991109265</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
