import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import PricingData from "../../data/pricing/PricingData.json";
import { FaCheck } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";

const getPriceingData = PricingData;

const PricingOne = () => {
  return (
    <>
      <div className="row">
        {getPriceingData.map((data, index) => (
          <div className="col-lg-4" key={index}>
            <AnimationOnScroll
              animateIn="fadeInUp"
              animateOnce={true}
              delay={data.delay}
            >
              <div className="pricing-table pricing-borderd">
                <div className="pricing-header">
                  <h3 className="title">{data.title}</h3>
                  <span className="subtitle">{data.subtitle}</span>
                  <div className="price-wrap">
                    <div className="yearly-pricing">
                      <span className="amount">{data.yprice}</span>
                    </div>
                  </div>
                  <div className="pricing-btn">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      activeClass="active"
                      className="axil-btn btn-large btn-borderd"
                    >
                      Get Started Today
                    </Link>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list-unstyled">
                    {data.facility.map((data, index) => (
                      <li key={index}>
                        <FaCheck /> {data}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingOne;
