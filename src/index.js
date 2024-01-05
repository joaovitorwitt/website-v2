import React, { useContext, useEffect, useState } from "react";
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
import { createContext } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const router = createBrowserRouter(
  [
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
      path: "articles/:title",
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
      path: "/projects/:title",
      element: <Project />,
    },
  ],
  { basename: "/" }
);

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // initialize theme from local storage
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <SpeedInsights />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
