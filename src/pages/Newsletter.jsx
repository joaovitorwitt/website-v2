import { useEffect } from "react";
import Header from "../components/Header";
import NewsletterForm from "../components/NewsletterForm";
import ScrollReveal from "scrollreveal";
import { useTheme } from "..";

export default function Newsletter() {
  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     distance: "50px",
  //     duration: 1500,
  //     easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  //   });

  //   sr.reveal(".newsletter-title", { origin: "top" });
  //   sr.reveal(".newsletter-description", { origin: "bottom" });
  // });

  const { currentTheme } = useTheme();

  return (
    <div className="newsletter-page-wrapper" data-theme={currentTheme}>
      <Header />
      <div className="container">
        <div className="newsletter-container">
          <h1 className="newsletter-title title">welcome</h1>
          <p className="newsletter-description">
            Get the latest news on computer science, mathematics, and physics
            delivered directly to your inbox. Stay informed and inspired with
            captivating insights.
          </p>

          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
