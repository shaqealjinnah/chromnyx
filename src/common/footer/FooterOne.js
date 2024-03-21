import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Linka } from "react-router-dom";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
  FaEnvelopeOpen,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";
import FooterBenefit from "./FooterBenefit";
import { AnimationOnScroll } from "react-animation-on-scroll";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <AnimationOnScroll
                animateIn="fadeInLeft"
                animateOnce={true}
                delay={100}
              >
                <div className="footer-widget border-end">
                  <div className="footer-newsletter">
                    <h2 className="title">Get in touch!</h2>
                    <p>
                      Ready for a website makeover? Join our mailing list for
                      expert tips and strategies.
                    </p>
                    <form>
                      <div className="input-group">
                        <span className="mail-icon">
                          <FaEnvelopeOpen />{" "}
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                        />
                        <button className="subscribe-btn" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="col-xl-6 col-lg-7">
              <AnimationOnScroll
                animateIn="fadeInRight"
                animateOnce={true}
                delay={100}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer-widget">
                      <h6 className="widget-title">Why a Website?</h6>
                      <div className="footer-menu-link">
                        <ul className="list-unstyled">
                          <li>
                            <FooterBenefit />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="footer-widget">
                      <h6 className="widget-title">Support</h6>
                      <div className="footer-menu-link">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              to="contact"
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                              activeClass="active"
                            >
                              Contact Us
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Linka to={"/privacy-policy"}>Privacy Policy</Linka>
                          </li>
                          <li>
                            <Linka to={"/terms-use"}>Terms of Use</Linka>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
        <AnimationOnScroll
          animateIn="fadeInUp"
          animateOnce={true}
          delay={100}
          offset={0}
        >
          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-copyright">
                  <span className="copyright-text">
                    © {new Date().getFullYear()}. All rights reserved by
                    Chromnyx.
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-link">
                  <ul className="list-unstyled">
                    <li>
                      <Linka to={"/privacy-policy"}>Privacy Policy</Linka>
                    </li>
                    <li>
                      <Linka to={"/terms-use"}>Terms of Use</Linka>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </footer>
  );
};

export default FooterOne;
