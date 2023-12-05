import classNames from "classnames";
import "./Projects.scss";
import data from "../../data/project.json"
import { useEffect } from "react";
function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="path">
        <h1 className={classNames("h1", "path__name")}>projects</h1>
        <p className="path__description">All of my projects</p>
      </div>

      <section className="projects">
        <div className="projects__header">
          <h2 className="project__title1">My project</h2>
        </div>

        <div className={classNames("project-list", "row")}>
          {
            data.map((item,index)=> (
              <div key={index} className={classNames("project", "col-lg4","col-6custom","col-12custom", "img-fluid")}>
            <img
              src={item.img}
              alt=""
              className={classNames("project__image")}
            ></img>

            <ul class="project__techs">
              
              {item.techs.map((tech,index)=>{
                return <li key={index} className="project__tech">{tech}</li>
              })}
            </ul>

            <div class="project__content">
              <div className="project__name pb-4">{item.content}</div>
    
              <div className="project__links">
                {item.demo ? <a href={item.demo} class="button ">Demo</a> : ""}
                <a
                  href={item.github}
                  class="button "
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
            ))
          }

        </div>
      </section>

    </div>
  );
}

export default Projects;
