import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import projectsList from "../projects.js";

export default function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".main-title-projects", { origin: "top" });
    sr.reveal(".portfolio-card", { interval: 200 });
    sr.reveal(".disclaimer", { origin: "left" });
  });

  // TODO - add field for a more detailed description for the individual page
  // TODO - come up with mathematical formula to always get results in the range of 6 (perhaps the remaining operator)

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title main-title-projects">
          Explore my personal projects where ideas come to life
        </h1>
        <p className="disclaimer">
          *Disclaimer: The images are just for illustration since the projects
          are not production ready.
        </p>

        <div className="portfolio-cards d-grid">
          {/* <!-- BE CAREFUL WHEN LOOP COUNTER GOES BEYOND 6 --> */}
          {projectsList.map((project, index) => (
            <Link
              to={`/projects/${project.id}`}
              className={"portfolio-card portfolio-card-" + project.id}
              key={project.id}
            >
              <div className="card-image">
                <img src={project.image} alt="card1" />
              </div>

              <div className="card-heading">
                <h5 className="card-title">{project.title}</h5>
                <span className="card-subtitle">{project.description}</span>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="large-button-container"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <Link to={"/"} className="large-button button-fill">
            Return
          </Link>
        </div>
      </div>
    </>
  );
}
