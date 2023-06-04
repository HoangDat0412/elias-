import "./About.scss";
import classNames from "classnames";

function About() {
  return (
    <div>
      <div className="path">
        <h1 className="h1 path__name">about-me</h1>
        <p className="path__description">Who am i</p>
      </div>

      <section className={classNames("about", "row")}>
        <div className={classNames("about__illustrations", "col-12","col-md-4")}>
          <img
            src="https://elias-dev.ml/images/about-me.png"
            alt=""
            className="about__image"
          ></img>
        </div>
        <div className={classNames("about__text", "col-12","col-md-7")}>
          <p className="about__description">
          I am a 3rd year student at Vietnam National University-International School.I was born in 2003. My major is informatics and computer engineering..{" "}
          </p>

          <p className="about__description">
          I taught myself how to build a website, I love to code and I find it very engaging. My goal is to be able to learn more knowledge and be able to apply it to do big projects{" "}
          </p>

          <p className="about__description">
            I always strive to learn about the newest technologies and
            frameworks.{" "}
          </p>
        </div>
      </section>

      <section className="skills">
        <h2 className="h2">skills</h2>
        <div className={classNames("skills__content","row","justify-content-center")}>
          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3")}>
            <div className="skill-block__name">Languages</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">TypeScript</li>
              <li className="skill-block__skill">JavaScript</li>
              <li className="skill-block__skill">Java</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3")}>
            <div className="skill-block__name">Databases</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">MySQL</li>
              <li className="skill-block__skill">SQL</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3")}>
            <div className="skill-block__name">Other</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">HTML</li>
              <li className="skill-block__skill">CSS</li>
              <li className="skill-block__skill">SASS</li>
              <li className="skill-block__skill">SCSS</li>
              <li className="skill-block__skill">Node.js</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3","tool")}>
            <div className="skill-block__name">Tools</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">VSCode</li>
              <li className="skill-block__skill">Git &amp; GitHub</li>
              <li className="skill-block__skill">FontAwesome</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3","Framwork")}>
            <div className="skill-block__name">Frameworks</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">React</li>
              <li className="skill-block__skill">Express</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="facts">
            <h2 class="h2">fun-facts</h2>
            <div class="facts__content">
                <ul class="facts__list">
                    
                        <li class="fact">I like winter more than summer</li>
                    
                        <li class="fact">I often swimming  with my friends</li>
                    
                        <li class="fact">I like phở and thịt kho</li>
                    
                        <li class="fact">I’m still studing in school</li>
                    
                        <li class="fact">My favorite movie is Harry Potter</li>
                        
                    
                </ul>
                <div class="facts__illustrations">
                    
                </div>
            </div>

        </section>
    </div>
  );
}

export default About;
