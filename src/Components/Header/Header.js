import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import classes from "./Header.module.css";
import hamburger from "../../Components/assets/burger-menu-right-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={classes.header}>
      <div className={classes.navbar}>
        <div className={classes.logo}>Akshay</div>
        <div>
          <img
            src={hamburger}
            className={`${classes.hamburgerIcon} ${isMenuOpen ? classes.hideHamburger : ""}`}
            onClick={toggleMenu}
            alt="Menu"
          />
        </div>
        <ul className={`${classes.ul} ${isMenuOpen ? classes.showMenu : ""}`}>
          <li className={classes.li} onClick={toggleMenu}>
            <NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>
          </li>
          <li className={classes.li} onClick={toggleMenu}>
            <NavLink to="/project" activeClassName={classes.active}>Project</NavLink>
          </li>
          <li className={classes.li} onClick={toggleMenu}>
            <NavLink to="/about" activeClassName={classes.active}>About</NavLink>
          </li>
          <li className={classes.li} onClick={toggleMenu}>
            <NavLink to="/contact" activeClassName={classes.active}>Contact</NavLink>
          </li>
        </ul>
        <div className={classes.iconContainer}>
          <Link to="">
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
