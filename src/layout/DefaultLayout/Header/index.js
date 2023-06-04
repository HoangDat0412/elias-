import classNames from "classnames";
import './Header.scss'
import { Link ,NavLink} from "react-router-dom";

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
          <span className={classNames("logo-name")}>DAT</span>
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
              <a className="nav-item">
                <NavLink className={ classNames('nav-link')} id="home"  aria-current="page" to="/">
                   home
                </NavLink>
              </a>
              <a  className="nav-item">
                <NavLink className={ classNames('nav-link')} id="project" to="/projects">
                  projects
                </NavLink>
              </a>

              <a  className="nav-item">
                <NavLink className={ classNames('nav-link')}  id="about" to="/about" >
                  about-me
                </NavLink>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}



export default Header;
