import { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function ThankYouContact() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".thankyou-description", { origin: "top" });
    sr.reveal(".thankyou-redirections", { origin: "bottom" });
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="thankyou-description">
          <h1 className="title">Thank you!</h1>
          <p>
            Thank you for reaching out! Your message has been successfully
            received. I will get back to you in no time to. In the meantime,
            feel free to explore my articles and stay updated with our latest
            content.
          </p>
        </div>

        <div className="thankyou-redirections">
          <Link to={"/"}>Back to the homepage</Link>
          <Link to={"/articles"}>Check out some articles</Link>
        </div>
      </div>
    </>
  );
}
