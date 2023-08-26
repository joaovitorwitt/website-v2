import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ArticleList from "../articles";

export default function Article() {
  const { id } = useParams();

  const article = ArticleList.find(
    (article) => article.id === parseInt(id, 10)
  );
  return (
    <>
      <Header />
      <section className="blog-post section-header-offset">
        <div className="blog-post-container container">
          <div className="blog-post-data">
            <h3 className="blog-post-title title">{article.title}</h3>
            <div className="article-data">
              <span>{article.date}</span>
            </div>

            <img src={article.image} alt="article" />
          </div>

          <div className="container">
            <p dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </section>

      <div className="large-button-container" style={{ margin: "3rem 0" }}>
        <Link to={"/articles"} className="large-button button-fill">
          Return
        </Link>
      </div>
    </>
  );
}
