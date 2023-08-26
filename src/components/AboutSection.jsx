import Typed from "typed.js";
import { useEffect } from "react";

export default function AboutSection() {
  useEffect(() => {
    let typed = new Typed("#changing", {
      strings: [
        "Full Stack Developer",
        "Blockchain Developer",
        "Machine Learning Developer",
        "Web Developer",
      ],
      typeSpeed: 100,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="about-me section" id="about-me">
      <div className="container">
        <div className="section-description d-grid">
          <div className="scroll-reveal-left">
            <p className="description">
              I am a <span className="text-bold" id="changing"></span>
            </p>
          </div>
        </div>

        <div className="tech-stack d-grid">
          <div className="tech-stack-item" data-tooltip="HTML">
            <i className="fa-brands fa-html5"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="CSS">
            <i className="fa-brands fa-css3-alt"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="JavaScript">
            <i className="fa-brands fa-js"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="React">
            <i className="fa-brands fa-react"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="Python">
            <i className="fa-brands fa-python"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="SQL">
            <i className="fa-solid fa-database"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
