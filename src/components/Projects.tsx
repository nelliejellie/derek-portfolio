import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IonIcon } from "@ionic/react";
import premier from "../assets/premierLeague.png";
import kpmg from "../assets/kpmgmarketing.png"
import train from "../assets/trains.webp"
import elephant from "../assets/elephant.webp"
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
            src={train}
            alt="chart for premier league"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Forecasting Northern Trains Time Series in R</h2>
            <p className="leading-loose">
              Since the pandemic, an unprecedented drop in passenger rail usage for an extended period has led to changes to business operations. this resulted in a large number of refund applications for both ordinary and season tickets for train providers. Organizations such as Northern trains have recovered but what does it mean for train usage in the next few years? will trains go back to normal? There is no need to know the exact number of train usage for northern trains of the future, but we can model its movements.

              In this article, I’ll demonstrate how to model a time series in R using the ARIMA model.
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>tableau
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://medium.com/@yahayausman500/forecasting-northern-trains-time-series-in-r-64257627bd69"
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
                  href="https://medium.com/@yahayausman500/forecasting-northern-trains-time-series-in-r-64257627bd69"
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
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={elephant}
            alt="chart for premier league"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Transform Your Data Analysis: Mastering Data Cleaning Techniques for Better Insights</h2>
            <p className="leading-loose">
              Introduction: In the era of data-driven decision-making, the quality of information has become increasingly important. For organizations like Lowell, a market leader in providing financial debt collection services that empower customers to regain control of their debt through user-friendly online account management and tailored payment plans, data quality is vital. In this beginner-friendly guide, we will delve into the essential process of data cleaning, outlining each step, offering practical solutions to enhance data quality, and highlighting the role of a Data Cleansing Specialist.
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>tableau
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://medium.com/@yahayausman500/transform-your-data-analysis-mastering-data-cleaning-techniques-for-better-insights-f676c73fe351"
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
                  href="https://medium.com/@yahayausman500/transform-your-data-analysis-mastering-data-cleaning-techniques-for-better-insights-f676c73fe351"
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
            src={premier}
            alt="chart for premier league"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Premier League 21/22 Goal Difference ScatterPlot</h2>
            <p className="leading-loose">
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
    </section>
  );
};

export default Projects;