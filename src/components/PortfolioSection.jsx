import Placeholder from "../assets/images/placeholder.png";
import Placeholder2 from "../assets/images/placeholder2.png";
import { Link } from "react-router-dom";

export default function PortfolioSection() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-title-container">
          <h2 className="title section-title">Projects</h2>
          <div className="section-subtitle-container">
            <span className="subtitle-number has-sparkles">02</span>
            <h5 className="title section-subtitle">recent</h5>
          </div>
        </div>

        <div className="portfolio-cards d-grid">
          <Link to={"/projects/1"} className="portfolio-card portfolio-card-1">
            <div className="card-image">
              <img src={Placeholder} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Physics Engine</h5>
              <span className="card-subtitle">
                A place where you can take your physics knowledge to the next
                level.
              </span>
            </div>
          </Link>

          <Link to={"/projects/2"} className="portfolio-card portfolio-card-2">
            <div className="card-image">
              <img src={Placeholder2} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Productivity App</h5>
              <span className="card-subtitle">
                Most people say that you cannot buy time. Let me show you
                something..
              </span>
            </div>
          </Link>

          <Link to={"/projects/3"} className="portfolio-card portfolio-card-3">
            <div className="card-image">
              <img src={Placeholder} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Academic Paper Scraper</h5>
              <span className="card-subtitle">
                Gather all scientific information from the community all in one
                place.
              </span>
            </div>
          </Link>

          <Link to={"/projects/4"} className="portfolio-card portfolio-card-4">
            <div className="card-image">
              <img src={Placeholder2} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">AGI</h5>
              <span className="card-subtitle">You saw that coming.</span>
            </div>
          </Link>

          <Link to={"/projects/5"} className="portfolio-card portfolio-card-5">
            <div className="card-image">
              <img src={Placeholder} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Blockchain Ecosystem</h5>
              <span className="card-subtitle">
                Run, deploy, and test all your blockchain operations.
              </span>
            </div>
          </Link>

          <div className="portfolio-card portfolio-card-6 large-button-container">
            <Link to={"/projects"} className="large-button button-fill">
              See
              <br />
              All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
