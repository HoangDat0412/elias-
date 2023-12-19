import "./Home.scss";
import Hero from "../../Components/HomeComponent/Hero";
import DotSvg2 from "../../Components/sgv/svg2";
import DotSvg3 from "../../Components/sgv/svg3";
import data from "../../data/skill.json";
import HomeProject from "../../Components/HomeComponent/HomeProject";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="Home_content">
      {/* section hero */}
      <Hero/>
      {/* section qoute*/}
      <figure className="quote">
        <blockquote className="quote__text">
          Your life only gets better when you get better 
        </blockquote>
        <figcaption className="quote__author">Brian Tracy</figcaption>
      </figure>


{/* section about*/}
<section className="about row container-fluid">
        <div className="about__content col-12 col-md-7">
          <h2 className="h2">about me</h2>
          <div className="about__text">
            <p className="about__description">
            I am a 3rd year student at Vietnam National University-International School.I was born in 2003. My major is informatics and computer engineering.
            </p>
            <p className="about__description">
            I taught myself how to build a website, I love to code and I find it very engaging. My goal is to be able to learn more knowledge and be able to apply it to do big projects
            </p>
          </div>
          <a href="/about-me" className="button">View all -&gt;</a>
        </div>
        <img
          src="https://elias-dev.ml/images/about-me.png"
          alt=""
          className="about__image col-12 col-md-5"
        ></img>
      </section>
      {/* section skills*/}
      <sections className="skills container-fluid">
        <h2 className="h2__skills">My skills</h2>
        <div className="skills__content row">
          <div
            className="skills__illustrations illustrations col-12 col-lg-5"
            
          >
            <img
              src="https://elias-dev.ml/images/logo-outline.svg"
              alt=""
              className="illustrations__logo"
            ></img>
            <DotSvg2 />
            <DotSvg3 />
          </div>
          <div
            className="skills__list col-12 col-lg-7 row container-fluid justify-content-center">
            {data.map((item, index) => {
              return (
                <div className="skill-block  col-sm-6" key={index}>
                  <div className="skill-block__name">{item.title}</div>
                  <ul className="skill-block__list">
                    {item.skills.map((skill, index) => (
                      <li className="skill-block__skill">{skill}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </sections>

      {/* section projects */}
        <HomeProject/>

      
      {/* section contact*/}
      <sections className="contacts container-fluid">
        <h2 className="h2">contacts</h2>
        <div className="contacts__content row">
          <p
            className=
              "contacts__description col-12 col-lg-8"
            
          >
            If you have
            other request or question, don’t hesitate to contact me
          </p>
          <div className="contacts__media col-12 col-lg-3">
            <h3 className="contacts__title">Message me here</h3>
            <div className="contacts__list">

              <a className="contact" href="mailto:hoang2811dat@gmail.com">
                <div className="contact__name">hoang2811dat@gmail.com</div>
              </a>
            </div>
          </div>
        </div>
      </sections>
    </div>
  );
}

export default Home;
