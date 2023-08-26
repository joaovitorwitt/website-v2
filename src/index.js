import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Newsletter from "./pages/Newsletter";
import ThankYou from "./pages/ThankYou";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import ThankYouContact from "./pages/ThankYouContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/articles",
    element: <Articles />,
    errorElement: <ErrorPage />,
  },
  {
    path: "articles/:id",
    element: <Article />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/newsletter",
    element: <Newsletter />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/thanks",
    element: <ThankYouContact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/:id",
    element: <Project />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
