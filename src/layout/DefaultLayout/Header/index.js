import classNames from "classnames";
import './Header.scss'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={classNames("Header","container-fluid")}>

      <div className={ classNames("media-header")}>
        <span className={ classNames("media-header__line")}></span>
        <div class="media-header__links">
                    
        <a href="https://discord.com/users/914240860101681163" class="media">
            <img src="https://elias-dev.ml/images/icons/discord.svg" alt="discord" class="media__icon"></img>
        </a>
        <a href="https://github.com/" class="media">
            <img src="https://elias-dev.ml/images/icons/github.svg" alt="github" class="media__icon"></img>
        </a>
        <a href="mailto:hoang2811dat@gmail.com" class="media">
            <img src="https://elias-dev.ml/images/icons/email.svg" alt="email" class="media__icon"></img>
        </a>
                </div>

      </div>

      <nav className={ classNames("navbar","navbar-expand-lg","container-fluid")}>
        <div className="container-xl">
          
          <a  className={classNames("navbar-brand")} href="#">
          <img className={classNames('logo-img')} src="https://elias-dev.ml/images/logo.svg" alt="Elias logo"></img>
          <span className={classNames("logo-name")}>Elias</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
          </button>

          <div className={ classNames("collapse","navbar-collapse")}id="navbarNavDropdown">

            <ul className="navbar-nav">
              <Link to="/" className="nav-item">
                <a className={ classNames('nav-link',"active")} id="home"  aria-current="page" href="#" onClick={(e) => onhandleActive(e)}>
                   home
                </a>
              </Link>
              <Link to="/projects" className="nav-item">
                <a className={ classNames('nav-link')} id="project" href="#" onClick={(e) => onhandleActive(e)}>
                  projects
                </a>
              </Link>

              <Link to="/about" className="nav-item">
                <a className={ classNames('nav-link')}  id="about" href="#" onClick={(e) => onhandleActive(e)}>
                  about-me
                </a>
              </Link>

              <li className="nav-item dropdown">
                <a
                  className={ classNames('nav-link',"dropdown-toggle")}
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      RU
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      UA
                    </a>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

let a = "home";
let onhandleActive = function(e){


  
  let home = document.getElementById("home")
let project = document.getElementById("project")
let about = document.getElementById("about")

if(a="home"){
  if(e.target.id == "project"){
    project.classList.add("active")
    home.classList.remove("active")
    a = "project"
  }
  if(e.target.id == "about"){
    about.classList.add("active")
    home.classList.remove("active")
    a = "about"
  }
}

if(a="about"){
  if(e.target.id == "home"){
    home.classList.add("active")
    about.classList.remove("active")
    a = "home"
  }
  if(e.target.id == "project"){
    project.classList.add("active")
    about.classList.remove("active")
    a = "project"
  }
}

if(a="project"){
  if(e.target.id == "home"){
    home.classList.add("active")
    project.classList.remove("active")
    a = "home"
  }
  if(e.target.id == "about"){
    about.classList.add("active")
    project.classList.remove("active")
    a = "about"
  }
}

}

export default Header;
