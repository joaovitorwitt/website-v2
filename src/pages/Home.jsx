import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PortfolioSection from "../components/PortfolioSection";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".main-title", { origin: "top" });
    sr.reveal(".scroll-reveal-left", { origin: "left" });
    sr.reveal(".scroll-reveal-right", { origin: "right" });
    sr.reveal(".tech-stack-item", { interval: 250 });
    sr.reveal(`.section-title, .section-subtitle-container`, {
      origin: "top",
      interval: 250,
    });

    sr.reveal(`.form-container, .footer`, {
      origin: "top",
    });

    sr.reveal(".portfolio-card", { interval: 500 });
  });

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
