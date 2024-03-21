import React from "react";
import { Link } from "react-scroll";

function FooterBenefit() {
  return (
    <div className="d-flex flex-column">
      <Link
        to="benefits"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        activeClass="active"
      >
        Credibility
      </Link>
      <Link
        to="benefits"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        activeClass="active"
      >
        Leads
      </Link>
      <Link
        to="benefits"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        activeClass="active"
      >
        Time-Saving
      </Link>
      <Link
        to="benefits"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        activeClass="active"
      >
        Organic Traffic
      </Link>
      <Link
        to="benefits"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        activeClass="active"
      >
        Branding
      </Link>
      <Link
        to="benefits"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        activeClass="active"
      >
        Beat Your Competitors
      </Link>
    </div>
  );
}

export default FooterBenefit;
