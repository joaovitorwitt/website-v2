import { Link, useParams } from "react-router-dom";
import projectsList from "../projects";
import Header from "../components/Header";

export default function Project() {
  const { id } = useParams();

  const project = projectsList.find(
    (project) => project.id === parseInt(id, 10)
  );
  return (
    <>
      <Header />
      <div className="container">
        <section className="project-wrapper">
          <div className="project-container">
            <div className="project-image-data">
              <img src={project.image} alt="" />
            </div>

            <div className="project-data">
              <div className="project-data-main">
                <h2 className="project-data-title">{project.title}</h2>
                <p className="project-data-description">
                  {project.description}
                </p>
              </div>

              <Link to={`/projects`} className="return-projects">
                Return
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
