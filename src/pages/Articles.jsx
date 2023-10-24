import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Header from "../components/Header";
// importing articles file
import ArticleList from "../articles.js";
import { useTheme } from "..";

export default function Articles() {
  const { currentTheme } = useTheme();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });
    sr.reveal(".article", { interval: 200 });
  });

  return (
    <div className="articles-page-wrapper" data-theme={currentTheme}>
      <Header />
      <div className="container">
        <div className="posts-wrapper">
          {ArticleList.slice() // Create a shallow copy of the array
            .sort((a, b) => b.id - a.id) // Sort in descending order by id
            .map((article, index) => (
              <Link
                key={index}
                className="article"
                to={`/articles/${article.id}`}
              >
                <div className="article-wrapper">
                  <div className="posts-article-image-wrapper">
                    <img
                      src={article.image}
                      key={article.id}
                      alt=""
                      className="article-image"
                    />
                  </div>

                  <div className="article-data-container">
                    <div className="article-data">
                      <span>{article.date}</span>
                      <span className="article-data-spacer"></span>
                    </div>

                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
