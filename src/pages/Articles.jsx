import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useTheme } from "..";

// importing articles file
import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";

export default function Articles() {
  const { currentTheme } = useTheme();

  // set up api endpoint retriving a list of articles
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-fdxe.onrender.com/api/v1/get/articles/"
        );
        const result = await response.json();
        setArticles(result.articles);
        console.log("Fetched articles:", result.articles);
      } catch (error) {
        console.error("Error fetching articles: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
    <div className="articles-page-wrapper" data-theme={currentTheme}>
      <Header />
      <div className="container">
        {loading ? (
          // insert loading component here
          // <p>Loading articles...</p>
          <LoadingComponent />
        ) : Array.isArray(articles) && articles.length > 0 ? (
          <div className="posts-wrapper">
            {articles.map((article) => (
              <Link
                key={article.id}
                className="article"
                to={`/articles/${formatTitleForURL(article.title)}`}
              >
                <div className="article-wrapper">
                  <div className="posts-article-image-wrapper">
                    <img
                      src={article.thumbnail}
                      key={article.id}
                      alt=""
                      className="article-image"
                    />
                  </div>

                  <div className="article-data-container">
                    <div className="article-data">
                      <span>{formatArticleDate(article.publish_date)}</span>
                      <span className="article-data-spacer"></span>
                    </div>

                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No articles found.</p>
        )}

        <div
          className="large-button-container"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          <Link to={"/"} className="large-button button-fill">
            Return
          </Link>
        </div>
      </div>
    </div>
  );
  // ////////////////////////////////////////////////////////
}
