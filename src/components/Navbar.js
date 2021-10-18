import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobleMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobleMenu}>
              <img className="logo_img" alt="logo" src="img/logo_50px.png" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobleMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/skills"
                  className="nav-links"
                  onClick={closeMobleMenu}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className="nav-links"
                  onClick={closeMobleMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav_btn">
                {button ? (
                  <Link to="/contact" className="btn-link">
                    <Button buttonStyle="btn--outline">CONTACT</Button>
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="btn-link"
                    onClick={closeMobleMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      CONTACT
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
