import { Link, useParams } from "react-router-dom";
// import projectsList from "../projects";
import Header from "../components/Header";
import { useTheme } from "..";
import { useEffect, useState } from "react";

export default function Project() {
  const { currentTheme } = useTheme();
  const { title } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/get/projects/"
        );
        const result = await response.json();
        const correctTitleProject = getCorrectTitle(result.projects);
        setProject(correctTitleProject);
      } catch (error) {
        console.log("Error fetching projects,", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [title]); // Added title as a dependency to re-run effect when title changes

  function getCorrectTitle(list) {
    return list.find(
      (project) => formatTitleForURL(project.project_title) === title
    );
  }

  function formatTitleForURL(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <div className="project-page-wrapper" data-theme={currentTheme}>
      <Header />
      <div className="container">
        <section className="project-wrapper">
          {loading ? (
            <p>Loading project...</p>
          ) : (
            <div className="project-container">
              <div className="project-image-data">
                <img src={project.project_image_url} alt="" />
              </div>
              <div className="project-data">
                <div className="project-data-main">
                  <h2 className="project-data-title">
                    {project.project_title}
                  </h2>
                  <p className="project-data-description">
                    {project.project_description}
                  </p>
                </div>
                <Link to={`/projects`} className="return-projects">
                  Return
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
