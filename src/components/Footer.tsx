import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IonIcon } from '@ionic/react';
import { logoChrome, logoGithub, logoGoogle, logoPython, logoTwitter, logoWechat } from 'ionicons/icons';

const Footer = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <footer
      className={`py-20 ${
        lightTheme ? "bg-[#005269]" : "bg-[black]"
      } text-white`}
    >
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-4">
        <div className="md:col-span-2">
          <h2 className={`mb-3 text-2xl md:text-3xl font-medium`}>About Me</h2>
          <p>
            I think that anyone can learn to use and benefit from data. I am passionate about gaining and imparting knowledge to others
            and enjoy guidance and help to those in need. I am currently developing a community to easily guide youths from underrepresented 
            ethnic backgrounds into the field of data science and data analytics space.
          </p>
          <ul className="flex items-center  gap-6 md:w-full mt-2 md:mt-4">
            <li>
              <a
                href="https://github.com/Derekyayo"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
                target="_blank"
              >
                <IonIcon icon={logoGithub} />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.linkedin.com/in/uzor-nwachukwu-3467711a8"
                target="_blank"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li> */}
            <li>
              <a
                href="https://twitter.com/derek_yayo"
                target="_blank"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
              >
                <IonIcon icon={logoTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300">
           <IonIcon icon={logoChrome} /> Leeds, UK
          </div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300 my-3">
            <IonIcon icon={logoWechat} /> +44 (0)7570172792
          </div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300">
            <IonIcon icon={logoGoogle} /> yahayausman500@gmail.com
          </div>
        </div>
        <div>
          <p>&copy; Yahaya Usman Derek {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;