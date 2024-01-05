import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useTheme } from "..";
import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent.jsx";

export default function Projects() {
  const { currentTheme } = useTheme();

  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     distance: "50px",
  //     duration: 1500,
  //     easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  //   });

  //   sr.reveal(".main-title-projects", { origin: "top" });
  //   sr.reveal(".portfolio-card", { interval: 200 });
  //   sr.reveal(".disclaimer", { origin: "left" });
  // });

  // TODO - add field for a more detailed description for the individual page
  // TODO - come up with mathematical formula to always get results in the range of 6 (perhaps the remaining operator)

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/get/projects/"
        );

        const result = await response.json();
        setProjects(result.projects);
        console.log("Fetched projects: ", result.projects);
      } catch (error) {
        console.log("Error fetching projects, ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  function formatTitleForURL(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <div className="projects-page-wrapper" data-theme={currentTheme}>
      <Header />
      <div className="container">
        <h1 className="title main-title-projects">
          Explore my personal projects where ideas come to life
        </h1>
        {/* we used to have a p tag with a disclaimer class here, just in case */}

        <div className="portfolio-cards d-grid">
          {loading ? (
            <LoadingComponent />
          ) : (
            projects.map((project) => (
              <Link
                to={`/projects/${formatTitleForURL(project.project_title)}`}
                className={
                  "portfolio-card portfolio-card-" + project.project_id
                }
                key={project.project_id}
              >
                <div className="card-image">
                  <img src={project.project_image_url} alt="card1" />
                </div>
                <div className="card-heading">
                  <h5 className="card-title">{project.project_title}</h5>
                  <span className="card-subtitle">
                    {project.project_description}
                  </span>
                </div>
              </Link>
            ))
          )}

          {/* //////////////////////////////////////////////////////// */}
        </div>

        <div
          className="large-button-container"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          <Link to={"/"} className="large-button button-fill">
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}
