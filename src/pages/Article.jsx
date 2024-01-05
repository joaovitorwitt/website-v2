import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
// import ArticleList from "../articles";
import { useTheme } from "..";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";

export default function Article() {
  const { currentTheme } = useTheme();
  const { title } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // metadata states
  const [metadataInfo, setMetadataInfo] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-fdxe.onrender.com/api/v1/get/articles/"
        );

        const result = await response.json();
        const correctArticleTitle = getCorrectTitle(result.articles);
        console.log(result.articles);
        setArticle(correctArticleTitle);
      } catch (error) {
        console.log("Error fetching articles,", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [title]);

  function getCorrectTitle(list) {
    const correct = list.find(
      (article) => formatTitleForURL(article.title) === title
    );
    setMetadataInfo(correct);
    return correct;
  }

  function formatTitleForURL(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }

  function formatArticleDate(date) {
    // Create a new Date object from the input string
    const dateObject = new Date(date);

    // Define the months array
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract day, month, and year from the date object
    const day = dateObject.getDate();
    const monthIndex = dateObject.getMonth();
    const year = dateObject.getFullYear();

    // Format the date string
    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

    return formattedDate;
  }

  return (
    <div className="article-page-wrapper" data-theme={currentTheme}>
      {metadataInfo !== null ? (
        <Helmet>
          <title>{metadataInfo["title"]}</title>
          <meta name="title" content={metadataInfo["title"]} />
          <meta name="description" content={metadataInfo["description"]} />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://www.joaovitorwitt.com/articles/${formatTitleForURL(
              metadataInfo["title"]
            )}`}
          />
          <meta property="og:title" content={metadataInfo["title"]} />
          <meta
            property="og:description"
            content={metadataInfo["description"]}
          />
          <meta
            name="image"
            property="og:image"
            content={metadataInfo["thumbnail"]}
          />
          <meta name="author" content="João Vitor Witt"></meta>

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadataInfo["title"]} />
          <meta
            name="twitter:description"
            content={metadataInfo["description"]}
          />
        </Helmet>
      ) : null}
      <Header />
      <section className="blog-post section-header-offset">
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="blog-post-container container">
            <div className="blog-post-data">
              <h3 className="blog-post-title title">{article.title}</h3>
              <div className="article-data">
                <span>{formatArticleDate(article.publish_date)}</span>
              </div>

              <img src={article.thumbnail} alt="article" />
            </div>

            <div className="container">
              <p dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>
        )}
      </section>

      <div className="large-button-container" style={{ padding: "3rem 0" }}>
        <Link to={"/articles"} className="large-button button-fill">
          Return
        </Link>
      </div>
    </div>
  );
}
