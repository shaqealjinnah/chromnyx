import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li>
          <Link
            to="process"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            activeClass="active"
          >
            How it Works
          </Link>
        </li>
        <li>
          <Link
            to="benefits"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
          >
            Benefits
          </Link>
        </li>
        <li>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            activeClass="active"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
