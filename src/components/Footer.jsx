export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="social-media">
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

        <span>&copy; {year} João. All rights reserved.</span>

        <a href="#home" className="scroll-top">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
}
