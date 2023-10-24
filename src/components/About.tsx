import React, {useContext} from 'react'
import ThemeContext from "../context/ThemeContext";
import picture from "../assets/derek.webp";

const About = () =>{
    const { lightTheme } = useContext(ThemeContext);
    return(
        <section className={`py-10`}>
            <h1
                className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
                lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
                } duration-300 w-fit mx-auto`}
                data-aos="fade"
            >
                About Me
            </h1>
            <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
                <img
                src={picture}
                alt="Yaha Usman Derek"
                className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] object-cover rounded-full mx-auto md:mx-0"
                data-aos="fade-right"
                />
                <p className="leading-loose text-md md:text-lg" data-aos="fade-left">
                    I navigate this data-driven world as a tech-savvy data analytics professional with a Human Resources and Statistics background.
                    I am passionate about numbers and enjoy using data to uncover insights and tell stories. I have completed several data-focused projects as well as dealing with data-driven decision-making for half a decade. As a volunteer, I assist in providing or promoting opportunities for service user involvement whereby the enhancement of care and support of users is the primary goal. I enjoy resolving data issues for clients and converting data into valuable insights.
                    I think that anyone can learn to use and benefit from data. I am passionate about gaining and imparting knowledge to others and enjoy 
                    guidance and help to those in need. I am currently developing a community to easily guide youths from underrepresented ethnic backgrounds into the field of data science and data analytics space.
                </p>
            </div>
        </section>
    )
}

export default About