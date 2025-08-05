import { HashLink } from 'react-router-hash-link';
import './NavBar.css'

const handleNavMenuClick = (x) => {
    console.log("handleNavMenuClick running using: " + x);
    if (x){
        x.target.classList.toggle("navmenu-open");
        var navmenu = document.querySelector(".navmenu");
        if (navmenu.style.display === "flex") {
            navmenu.style.display = "none";
        } else {
            navmenu.style.display = "flex";
        }
    }
}

const handleNavMenuChildClick = (x) => {
    if (x){
        var navmenuButton = document.querySelector(".navmenu-button");
        navmenuButton.classList.toggle("navmenu-open");
        var navmenu = document.querySelector(".navmenu");
        navmenu.style.display = "none";
    }
}

const handleLoginButton = (x) => {}

function NavBar() {
    
  return (
    <header>
          <nav className="navbar">
              <HashLink 
                to="/#top" 
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end', alignToTop: 'true'})}
                className="navbar-logo"
              >
                <i className="devicon-apollographql-original colored navbar-logo"/>
              </HashLink>
              <HashLink 
                to="/#top" 
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end', alignToTop: 'true'})}
                className="hide-mobile nav-button button-30"
              >Home</HashLink>
              <HashLink 
                to="/#about"
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end', alignToTop: 'true'})}
                className="hide-mobile nav-button button-30"
              >About Me</HashLink>
                <HashLink 
                to="/#app-collection"
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start'})}
                className="hide-mobile nav-button button-30"
                >Projects</HashLink>
                <HashLink 
                to="/#contact"
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start'})}
                className="hide-mobile nav-button button-30 nav-button-contact"
                >Contact Me</HashLink>
              <HashLink 
                to="/Signup"
                className="nav-button button-30 nav-button-login"
                onClick={handleLoginButton}
              >Login/Sign Up</HashLink>
            <div className="navmenu-button-container">
                <div
                className="hide-desktop navmenu-button"
                onClick={handleNavMenuClick}
                >
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
                </div>
              </div>
            </nav>
            <div className="navmenu">
              <HashLink 
                to="/#top" 
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end', alignToTop: 'true'})}
                className="hide-desktop nav-button button-30"
              >Home</HashLink>
              <HashLink 
                to="/#about"
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end', alignToTop: 'true'})}
                className="hide-desktop nav-button button-30"
              >About Me</HashLink>
                <HashLink 
                to="/#app-collection"
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start'})}
                className="hide-desktop nav-button button-30"
                >Projects</HashLink>
                <HashLink 
                to="/#contact"
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start'})}
                className="hide-desktop nav-button button-30 nav-button-contact"
                >Contact Me</HashLink>
            </div>
        </header>
  )
}

export default NavBar