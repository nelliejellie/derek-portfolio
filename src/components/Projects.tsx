import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IonIcon } from "@ionic/react";
import premier from "../assets/premierLeague.png";
import kpmg from "../assets/kpmgmarketing.png"
import rapidnews from "../assets/rapidnewfrontend.jpeg";
import dashboard from "../assets/Dashboard1.png"
import urlshortener from "../assets/url-shortener.jpg";
import { logoGithub } from "ionicons/icons";
import { eye } from 'ionicons/icons';

const Projects = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`}>
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
          lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
        } duration-300 w-fit mx-auto`}
        data-aos="fade"
      >
        Projects
      </h1>
      <div className="py-5">
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={premier}
            alt="chart for premier league"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Premier League 21/22 Goal Difference ScatterPlot</h2>
            <p className="leading-loose">
                    --------------------------------------------------
                    |   Team               |   Points   |   Position   |
                    --------------------------------------------------
                    |   Manchester City    |   86       |   1          |
                    --------------------------------------------------
                    |   Liverpool          |   82       |   2          |
                    --------------------------------------------------
                    |   Chelsea            |   78       |   3          |
                    --------------------------------------------------
                    |   Manchester United  |   74       |   4          |
                    --------------------------------------------------
                    |   Arsenal            |   68       |   5          |
                    --------------------------------------------------
                    |   Leicester City     |   66       |   6          |
                    --------------------------------------------------
                    |   West Ham United    |   63       |   7          |
                    --------------------------------------------------
                    |   Everton            |   57       |   8          |
                    --------------------------------------------------
                    |   ...                |   ...      |   ...        |
                    --------------------------------------------------
                    Once upon a time, in the thrilling world of football, the Premier League season of 2021/2022 unfolded with excitement and surprises.
                    The stage was set for intense competition among twenty top-flight teams, each vying for glory and the coveted Premier League title.

                    The season kicked off with high expectations and anticipation. Reigning champions Manchester City aimed to defend their crown against formidable rivals such as Liverpool, 
                    Chelsea, Manchester United, and Arsenal. But the Premier League is known for its unpredictability, and every team had their own ambitions and aspirations.
                    I just had to make a ScatterPlot to make this seasons memorable thrill and excitement.
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>tableau
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href=""
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <IonIcon icon={logoGithub} /> Github
                </a>
              </span>
              <span>
                <a
                  href=""
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <IonIcon icon={eye} /> Live
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={kpmg}
            alt="chart for premier league"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">KPMG Dashboard</h2>
            <p className="leading-loose">
                KPMG, one of the leading professional services firms globally, has a robust marketing strategy that encompasses various aspects 
                of their business. KPMG's marketing efforts focus on establishing their brand presence, showcasing their expertise, and building 
                strong relationships with clients and stakeholders.

                KPMG's marketing initiatives revolve around highlighting their core services, which include audit, tax, and advisory services. 
                They strive to position themselves as trusted advisors who can provide valuable insights and solutions to clients' complex business challenges. 
                Through their marketing campaigns, KPMG aims to communicate their industry knowledge, technical expertise, and global reach. 
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>tableau
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href=""
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <IonIcon icon={logoGithub} /> Github
                </a>
              </span>
              <span>
                <a
                  href=""
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <IonIcon icon={eye} /> Live
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;