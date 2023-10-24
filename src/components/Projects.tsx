import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import mastrocred from "../assets/mastocred.jpeg";
import rapidnews from "../assets/rapidnewfrontend.jpeg";
import dashboard from "../assets/Dashboard1.png"
import urlshortener from "../assets/url-shortener.jpg";

const Projects = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`}>
      Projects
    </section>
  );
};

export default Projects;