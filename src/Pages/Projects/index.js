import classNames from "classnames";
import "./Projects.scss";
function Projects() {
  return (
    <div>
      <div className="path">
        <h1 className={classNames("h1", "path__name")}>projects</h1>
        <p className="path__description">All of my projects</p>
      </div>

      <section className="projects">
        <div className="projects__header">
          <h2 className="project__title1">decent</h2>
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

          <div className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <img
              src="https://elias-dev.ml/images/projects/kotikbot.jpg"
              alt=""
              className={classNames("project__image")}
            ></img>

            <ul class="project__techs">
              <li className="project__tech">HTML</li>
              <li className="project__tech">Javascrip</li>
              <li className="project__tech">Css</li>
            </ul>

            <div class="project__content">
              <div className="project__name">KotikBot</div>
              <div className="project__description">
                Landing for multi-funtional cute discord bot
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
              src="https://elias-dev.ml/images/projects/portfolio.jpg"
              alt=""
              className={classNames("project__image")}
            ></img>

            <ul class="project__techs">
              <li className="project__tech">Sass</li>
              <li className="project__tech">HTML</li>
              <li className="project__tech">Javascrip</li>
            </ul>

            <div className="project__content">
              <div className="project__name">This Portfolio</div>
              <div className="project__description">My personal portfolio</div>
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
              src="https://elias-dev.ml/images/projects/madhost.jpg"
              alt=""
              className={classNames("project__image")}
            ></img>

            <ul className="project__techs">
              <li className="project__tech">Pug</li>
              <li className="project__tech">Node.js</li>
              <li className="project__tech">Less</li>
              <li className="project__tech">Gulp</li>
            </ul>

            <div className="project__content">
              <div className="project__name">MadHost</div>
              <div className="project__description">
                Minecraft and websites hosting with low prices
              </div>
              <div className="project__links">
                <a href="https://khanswers.vercel.app" className="button ">
                  Live =&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="small">
        {" "}
        <h2 className="h2">small</h2>

        <div className={classNames("project-list","row")}>
          <div className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <img
              src="https://elias-dev.ml/images/projects/blog.jpg"
              alt=""
              className="project__image"
            ></img>

            <ul className="project__techs">
              <li className="project__tech">Vue</li>
              <li className="project__tech">SCSS</li>
            </ul>

            <div className="project__content">
              <div className="project__name">My blog</div>
              <div className="project__description">
                Front-end of my future blog website
              </div>
              <div className="project__links">
                <a href="https://github.com/EliasDevis/my-blog" className="button ">
                  Github =&gt;
                </a>
              </div>
            </div>
          </div>

          <div  className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <ul className="project__techs">
              <li className="project__tech">Discord.js</li>
              <li className="project__tech">Node.js</li>
              <li className="project__tech">TypeScript</li>
            </ul>

            <div className="project__content">
              <div className="project__name">Discord Bot Boilerplate</div>
              <div className="project__description">
                Start creating scalable discord.js bot with typescript in
                seconds
              </div>
              <div className="project__links">
                <a
                  href="https://github.com/EliasDevis/bot-template"
                  className="button "
                >
                  Github =&gt;
                </a>
              </div>
            </div>
          </div>

          <div className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <ul className="project__techs">
              <li className="project__tech">Figma</li>
            </ul>

            <div className="project__content">
              <div className="project__name">Chess PRO</div>
              <div className="project__description">
                Landing page about service for viewing chess tournaments
              </div>
              <div className="project__links">
                <a
                  href="https://figma.com/community/file/1148344443083977909"
                  className="button "
                >
                  Figma =&gt;
                </a>
              </div>
            </div>
          </div>

          <div className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <ul class="project__techs">
              <li class="project__tech">Python</li>
              <li class="project__tech">Flask</li>
            </ul>

            <div class="project__content">
              <div class="project__name">Ooku</div>
              <div class="project__description">
                Link shortener with discord auth
              </div>
              <div class="project__links">
                <a href="https://ooku.ga" class="button ">
                  Live =&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
