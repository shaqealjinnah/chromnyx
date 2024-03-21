import React from "react";
import { Link } from "react-router-dom";
import FormTwo from "../contact/FormTwo";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CtaLayoutOne = () => {
  return (
    <div className="section call-to-action-area" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-heading heading-light">
            <h2 className="title mb-0">Contact Us</h2>
          </div>
          <div className="col-xl-5 col-lg-6">
            <AnimationOnScroll
              animateIn="fadeInLeft"
              animateOnce={true}
              delay={100}
            >
              <div className="contact-form-box shadow-box mb--30">
                <h3 className="title">Let's Work Together</h3>
                <FormTwo />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <AnimationOnScroll
              animateIn="fadeInRight"
              animateOnce={true}
              delay={100}
            >
              <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                <h4 className="title">Phone</h4>
                <p>Our customer care is open from Mon-Sun.</p>
                <h4 className="phone-number">
                  <a href="tel:1234567890">(+61) 452 628 909</a>
                </h4>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="fadeInRight"
              animateOnce={true}
              delay={100}
            >
              <div className="contact-info mb--30">
                <h4 className="title">Email</h4>
                <p>
                  Our support team will get back to you in 1-2 business days.
                </p>
                <h4 className="phone-number">
                  <a href="mailto:info@example.com">info@chromnyx.com</a>
                </h4>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-9">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"}
            alt="Comments"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"}
            alt="Comments"
          />
        </li>
      </ul>
    </div>
  );
};

export default CtaLayoutOne;
