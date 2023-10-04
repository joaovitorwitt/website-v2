import { useTheme } from "..";

export default function Hero() {
  const { currentTheme } = useTheme();

  return (
    <section className="hero section" data-theme={currentTheme}>
      <div className="container">
        <h1 className="title main-title">
          Crea<span className="inline-image has-sparkles"></span>tive
          <br />
          Develope<span className="has-sparkles-alt">r</span>
        </h1>
      </div>
    </section>
  );
}
