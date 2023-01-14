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
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </p>

          <p className="about__description">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online.{" "}
          </p>

          <p className="about__description">
            I always strive to learn about the newest technologies and
            frameworks.{" "}
          </p>
        </div>
      </section>

      <section className="skills">
        <h2 className="h2">skills</h2>
        <div className={classNames("skills__content","row")}>
          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3")}>
            <div className="skill-block__name">Languages</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">TypeScript</li>
              <li className="skill-block__skill">JavaScript</li>
              <li className="skill-block__skill">Python</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3")}>
            <div className="skill-block__name">Databases</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">SQLite</li>
              <li className="skill-block__skill">MongoDB</li>
              <li className="skill-block__skill">PostgreSQL</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3")}>
            <div className="skill-block__name">Other</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">HTML</li>
              <li className="skill-block__skill">CSS</li>
              <li className="skill-block__skill">SASS</li>
              <li className="skill-block__skill">SCSS</li>
              <li className="skill-block__skill">EJS</li>
              <li className="skill-block__skill">Jinja2</li>
              <li className="skill-block__skill">Node.js</li>
              <li className="skill-block__skill">Less</li>
              <li className="skill-block__skill">Pug</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3","tool")}>
            <div className="skill-block__name">Tools</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">VSCode</li>
              <li className="skill-block__skill">NeoVim</li>
              <li className="skill-block__skill">Figma</li>
              <li className="skill-block__skill">Git &amp; GitHub</li>
              <li className="skill-block__skill">FontAwesome</li>
            </ul>
          </div>

          <div className={classNames("skill-block","col-12","col-sm-6","col-md-3","Framwork")}>
            <div className="skill-block__name">Frameworks</div>
            <ul className="skill-block__list">
              <li className="skill-block__skill">React</li>
              <li className="skill-block__skill">Vue</li>
              <li className="skill-block__skill">Disnake</li>
              <li className="skill-block__skill">Discord.js</li>
              <li className="skill-block__skill">Flask</li>
              <li className="skill-block__skill">Quart</li>
              <li className="skill-block__skill">Express</li>
              <li className="skill-block__skill">Gulp</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="facts">
            <h2 class="h2">fun-facts</h2>
            <div class="facts__content">
                <ul class="facts__list">
                    
                        <li class="fact">I like winter more than summer</li>
                    
                        <li class="fact">I often bike with my friends</li>
                    
                        <li class="fact">I like pizza and pasta</li>
                    
                        <li class="fact">I was in Egypt, Poland and Turkey</li>
                    
                        <li class="fact">I’m still studing in school</li>
                    
                        <li class="fact">My favorite movie is The Green Mile</li>
                    
                </ul>
                <div class="facts__illustrations">
                    
                </div>
            </div>

        </section>
    </div>
  );
}

export default About;
