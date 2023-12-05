import classNames from "classnames";
import './Header.scss'
import { Link ,NavLink} from "react-router-dom";

function Header() {
  return (
    <div className={classNames("Header","container-fluid")}>



      <nav className={ classNames("navbar","navbar-expand-lg","container-fluid")}>
        <div className="container-xl">
          
          <a  className={classNames("navbar-brand")} href="/">
 
          <span className={classNames("logo-name")}>HTAD</span>
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
