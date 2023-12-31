import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ArticleList from "../articles";
import { useTheme } from "..";
import { Helmet } from "react-helmet";

export default function Article() {
  const { id } = useParams();

  const article = ArticleList.find(
    (article) => article.id === parseInt(id, 10)
  );

  const { currentTheme } = useTheme();

  const metadata = {
    title: article.title,
    description: article.description,
    imageUrl: article.image,
    articleUrl: window.location.href,
  };

  return (
    <div className="article-page-wrapper" data-theme={currentTheme}>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.articleUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
      </Helmet>
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

      <div className="large-button-container" style={{ padding: "3rem 0" }}>
        <Link to={"/articles"} className="large-button button-fill">
          Return
        </Link>
      </div>
    </div>
  );
}
