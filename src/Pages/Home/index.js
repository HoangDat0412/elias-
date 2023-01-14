import classNames from "classnames";
import "./Home.scss";
function Home() {
  return (
    <div className="Home_content">
      {/* 
          section hero
      */}

      <section className={classNames("Hero", "row","container-fluid")}>
        <div className={classNames("col-12","col-sm-6", "hero__content")}>
          <h1 className="hero__title">
            Elias is a <span>web designer</span> and <span>front-end</span>{" "}
            developer
          </h1>
          <div className="hero__description">
            He crafts responsive websites where technologies meet creativity
          </div>
          <a
            className={classNames("button", "button__primary")}
            href="/contacts"
          >
            Contact ME ##
          </a>
        </div>

        <div className={classNames("col-12", "col-sm-6","hero__illustrations")}>
          <img
            src="https://elias-dev.ml/images/logo-outline.svg"
            alt=""
            className="hero__logo"
          ></img>

          <img
            src="https://elias-dev.ml/images/hero.png"
            alt="Elias"
            className="hero__image"
          ></img>

          <div className="hero__status">
            Currently working on <a href="/">Portfolio</a>
          </div>

          <svg width="100%" className="dots" viewBox="0 0 104 104">
            <circle cx="4" cy="4" r="4"></circle>
            <circle cx="4" cy="28" r="4"></circle>
            <circle cx="4" cy="52" r="4"></circle>
            <circle cx="4" cy="76" r="4"></circle>
            <circle cx="4" cy="100" r="4"></circle>
            <circle cx="28" cy="4" r="4"></circle>
            <circle cx="28" cy="28" r="4"></circle>
            <circle cx="28" cy="52" r="4"></circle>
            <circle cx="28" cy="76" r="4"></circle>
            <circle cx="28" cy="100" r="4"></circle>
            <circle cx="52" cy="4" r="4"></circle>
            <circle cx="52" cy="28" r="4"></circle>
            <circle cx="52" cy="52" r="4"></circle>
            <circle cx="52" cy="76" r="4"></circle>
            <circle cx="52" cy="100" r="4"></circle>
            <circle cx="76" cy="4" r="4"></circle>
            <circle cx="76" cy="28" r="4"></circle>
            <circle cx="76" cy="52" r="4"></circle>
            <circle cx="76" cy="76" r="4"></circle>
            <circle cx="76" cy="100" r="4"></circle>
            <circle cx="100" cy="4" r="4"></circle>
            <circle cx="100" cy="28" r="4"></circle>
            <circle cx="100" cy="52" r="4"></circle>
            <circle cx="100" cy="76" r="4"></circle>
            <circle cx="100" cy="100" r="4"></circle>
          </svg>
        </div>
      </section>

      {/* 
          section qoute
      */}

      <figure className={classNames("quote")}>
        <blockquote className="quote__text">
          With great power comes great electricity bill
        </blockquote>
        <figcaption className="quote__author">Dr. Who</figcaption>
      </figure>

      {/* 
          section projects
      */}

      <section className={classNames("projects","container-fluid")}>
        <div className="projects__header">
          <h2 className="project__title1">projects</h2>
          <a className="projects__link" href="/projects">
            View all {"~~>"}{" "}
          </a>
        </div>

        <div className={classNames("project-list", "row")}>
          <div className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <img
              src="https://elias-dev.ml/images/projects/chertnodes.jpg"
              alt=""
              className={classNames("project__image")}
            ></img>

            <ul class="project__techs">
              <li className="project__tech">Flask</li>
              <li className="project__tech">Python</li>
              <li className="project__tech">SCSS</li>
            </ul>

            <div class="project__content">
              <div className="project__name">ChertNodes</div>
              <div className="project__description">
                Minecraft servers hosting
              </div>
              <div className="project__links">
                <a href="https://chernodes.ru" class="button ">
                  Live =&gt;
                </a>
                <a
                  href="https://figma.com/community/file/1149829028455305659"
                  class="button "
                >
                  Figma =&gt;
                </a>
              </div>
            </div>
          </div>

          <div className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <img
              src="https://elias-dev.ml/images/projects/protectx.jpg"
              alt=""
              className={classNames("project__image")}
            ></img>

            <ul class="project__techs">
              <li className="project__tech">Express</li>
              <li className="project__tech">Node.js</li>
              <li className="project__tech">React</li>
              <li className="project__tech">RTK</li>
              <li className="project__tech">Discord.js</li>
            </ul>

            <div className="project__content">
              <div className="project__name">ProtectX web</div>
              <div className="project__description">Discord anti-crash bot</div>
              <div className="project__links">
                <a href="https://isecurity-protectx.tk" class="button ">
                  Live =&gt;
                </a>
                <a
                  href="https://figma.com/community/file/1168662007492356291"
                  class="button "
                >
                  Figma =&gt;
                </a>
              </div>
            </div>
          </div>

          <div className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <img
              src="https://elias-dev.ml/images/projects/khanswers.jpg"
              alt=""
              className={classNames("project__image")}
            ></img>

            <ul className="project__techs">
              <li className="project__tech">Express</li>
              <li className="project__tech">Node.js</li>
              <li className="project__tech">EJS</li>
            </ul>

            <div className="project__content">
              <div className="project__name">Kahoot Answers</div>
              <div className="project__description">
                Get answers from kahoot quiz
              </div>
              <div className="project__links">
                <a href="https://khanswers.vercel.app" className="button ">
                  Live =&gt;
                </a>
                <a
                  href="https://github.com/EliasDevis/kahoot-answers"
                  className="button "
                >
                  Github =&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
          section skills
      */}

      <sections className={classNames("skills","container-fluid")}>
        <h2 className="h2__skills">skills</h2>

        <div className={classNames("skills__content", "row")}>

          <div
            className={classNames(
              "skills__illustrations",
              "illustrations",
              "col-12"
              ,
              "col-lg-5"
            )}
          >
            <img
              src="https://elias-dev.ml/images/logo-outline.svg"
              alt=""
              className="illustrations__logo"
            ></img>

            <svg
              width="100%"
              className={classNames("dots", "dot1")}
              viewBox="0 0 80 80"
            >
              <circle cx="4" cy="4" r="4"></circle>
              <circle cx="4" cy="28" r="4"></circle>
              <circle cx="4" cy="52" r="4"></circle>
              <circle cx="4" cy="76" r="4"></circle>
              <circle cx="28" cy="4" r="4"></circle>
              <circle cx="28" cy="28" r="4"></circle>
              <circle cx="28" cy="52" r="4"></circle>
              <circle cx="28" cy="76" r="4"></circle>
              <circle cx="52" cy="4" r="4"></circle>
              <circle cx="52" cy="28" r="4"></circle>
              <circle cx="52" cy="52" r="4"></circle>
              <circle cx="52" cy="76" r="4"></circle>
              <circle cx="76" cy="4" r="4"></circle>
              <circle cx="76" cy="28" r="4"></circle>
              <circle cx="76" cy="52" r="4"></circle>
              <circle cx="76" cy="76" r="4"></circle>
            </svg>

            <svg
              width="100%"
              className={classNames("dots", "dot2")}
              viewBox="0 0 128 128"
            >
              <circle cx="4" cy="4" r="4"></circle>
              <circle cx="4" cy="28" r="4"></circle>
              <circle cx="4" cy="52" r="4"></circle>
              <circle cx="4" cy="76" r="4"></circle>
              <circle cx="4" cy="100" r="4"></circle>
              <circle cx="4" cy="124" r="4"></circle>
              <circle cx="28" cy="4" r="4"></circle>
              <circle cx="28" cy="28" r="4"></circle>
              <circle cx="28" cy="52" r="4"></circle>
              <circle cx="28" cy="76" r="4"></circle>
              <circle cx="28" cy="100" r="4"></circle>
              <circle cx="28" cy="124" r="4"></circle>
              <circle cx="52" cy="4" r="4"></circle>
              <circle cx="52" cy="28" r="4"></circle>
              <circle cx="52" cy="52" r="4"></circle>
              <circle cx="52" cy="76" r="4"></circle>
              <circle cx="52" cy="100" r="4"></circle>
              <circle cx="52" cy="124" r="4"></circle>
              <circle cx="76" cy="4" r="4"></circle>
              <circle cx="76" cy="28" r="4"></circle>
              <circle cx="76" cy="52" r="4"></circle>
              <circle cx="76" cy="76" r="4"></circle>
              <circle cx="76" cy="100" r="4"></circle>
              <circle cx="76" cy="124" r="4"></circle>
              <circle cx="100" cy="4" r="4"></circle>
              <circle cx="100" cy="28" r="4"></circle>
              <circle cx="100" cy="52" r="4"></circle>
              <circle cx="100" cy="76" r="4"></circle>
              <circle cx="100" cy="100" r="4"></circle>
              <circle cx="100" cy="124" r="4"></circle>
              <circle cx="124" cy="4" r="4"></circle>
              <circle cx="124" cy="28" r="4"></circle>
              <circle cx="124" cy="52" r="4"></circle>
              <circle cx="124" cy="76" r="4"></circle>
              <circle cx="124" cy="100" r="4"></circle>
              <circle cx="124" cy="124" r="4"></circle>
            </svg>
          </div>

          <div className={classNames("skills__list","col-12" ,"col-lg-7", "row","container-fluid")}>
            <div className={classNames("skill-block", "col-12","col-sm-6","col-md-4")}>
              <div className="skill-block__name">Languages</div>

              <ul className="skill-block__list">
                <li className="skill-block__skill">TypeScript</li>
                <li className="skill-block__skill">JavaScript</li>
                <li className="skill-block__skill">Python</li>
              </ul>
            </div>

            <div className={classNames("skill-block", "col-12","col-sm-6","col-md-4")}>
              <div className="skill-block__name">Databases</div>
              <ul className="skill-block__list">
                <li className="skill-block__skill">SQLite</li>
                <li className="skill-block__skill">MongoDB</li>
                <li className="skill-block__skill">PostgreSQL</li>
              </ul>
            </div>

            <div className={classNames("col-md-2","ah")}></div>

            <div className={classNames("skill-block", "col-12","col-sm-6","col-md-4")}>
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

            <div className={classNames("skill-block", "col-12","col-sm-6","col-md-4")}>
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

            <div className={classNames("col-md-2","ah")}></div>
          </div>


        </div>
      </sections>

      {/* 
          section about
      */}

      <section className={classNames("about", "row","container-fluid")}>
        <div className={classNames("about__content", "col-12","col-md-7")}>
          <h2 className="h2">about</h2>
          <div className="about__text">
            <p className="about__description">
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.{" "}
            </p>
            <p className="about__description">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>

          <a href="/about-me" className="button">
            View all -&gt;
          </a>
        </div>

        <img
          src="https://elias-dev.ml/images/about-me.png"
          alt=""
          className={classNames("about__image", "col-12","col-md-5")}
        ></img>
      </section>

      {/* 
          section contact
      */}
      <sections className={classNames("contacts","container-fluid")}>

        <h2 className={classNames("h2")}>contacts</h2>

        <div className={classNames("contacts__content","row")}>
          <p className={classNames("contacts__description","col-12","col-lg-8")}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>

          <div className={classNames("contacts__media","col-12","col-lg-3")}>
            <h3 className="contacts__title">Message me here</h3>
            <div className="contacts__list">
              <a
                className="contact"
                href="https://discord.com/users/914240860101681163"
              >
                <img src="https://elias-dev.ml/images/icons/discord.svg" alt=""></img>
                <div className="contact__name">!Elias#3519</div>
              </a>

              <a className="contact" href="mailto:elias@elias-dev.ml">
                <img src="https://elias-dev.ml/images/icons/email.svg" alt=""></img>
                <div className="contact__name">elias@elias-dev.ml</div>
              </a>
            </div>
          </div>
        </div>
      </sections>
    </div>
  );
}

export default Home;
