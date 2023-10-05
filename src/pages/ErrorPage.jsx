import { useRouteError } from "react-router-dom";
import { useTheme } from "..";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  const { currentTheme } = useTheme();

  return (
    <div className="error-page" data-theme={currentTheme}>
      <div className="error-page-wrapper">
        <h1>Oops!</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="large-button-container" style={{ margin: "3rem 0" }}>
          <Link to={"/"} className="large-button button-fill">
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}
