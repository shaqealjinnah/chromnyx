import React, { useState } from "react";
import Logo from "../../elements/logo/Logo";
import Nav from "../../common/header/Nav";
import OffcanvasMenu from "./OffcanvasMenu";
import StickyHeader from "./StickyHeader";
import SwitcherHeader from "../../elements/switcher/SwitcherHeader";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";

const HeaderOne = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);

  const sticky = StickyHeader(100);

  const MobileMenuHandler = () => {
    document.querySelector(".mobilemenu-popup").classList.toggle("show");
    document.querySelector("body").classList.toggle("mobilemenu-show");

    var elements = document.querySelectorAll(
      ".mobilemenu-popup .menu-item-has-children > a"
    );

    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".axil-submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
  };

  return (
    <>
      <header className="header axil-header header-style-1">
        <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  limage="/images/logo-light.svg"
                  dimage="/images/logo-dark.svg"
                  simage="/images/logo-light.svg"
                />
              </div>
              <div className="header-main-nav">
                <Nav />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="sidemenu-btn d-lg-block d-none">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      activeClass="active"
                      className="axil-btn sticky-btn"
                    >
                      Let's Talk
                    </Link>
                  </li>
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                    <button className="btn-wrap" onClick={MobileMenuHandler}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu
        offcanvasShow={showOffcanvas}
        offcanvasHide={OffcanvasHandleClose}
      />
      <MobileMenu MobileHandler={MobileMenuHandler} />
    </>
  );
};

export default HeaderOne;
