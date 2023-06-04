import React from 'react'
import classNames from "classnames";
import { NavLink } from 'react-router-dom';
import dataproject from "../../data/project.json";
export default function HomeProject() {
  return (
    <div>
              <section className={classNames("projects", "container-fluid")}>
        <div className="projects__header">
          <h2 className="project__title1">projects</h2>
          <NavLink className="projects__link" to="/projects">
            View all {"~~>"}{" "}
          </NavLink>
        </div>

        <div className={classNames("project-list", "row")}>
        {
            dataproject.slice(0,3).map((item,index)=> (
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
  )
}
