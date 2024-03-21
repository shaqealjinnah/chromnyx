import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BannerOne from "../component/banner/BannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import PricingOne from "../component/pricing/PricingOne";
import ServicePropOne from "../component/service/ServicePropOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import ServiceData from "../data/service/ServiceMain.json";
import Tilty from "react-tilty";
import { AnimationOnScroll } from "react-animation-on-scroll";

const allServiceData = ServiceData;

const DigitalAgency = () => {
  const useServiceData = allServiceData[0];

  return (
    <>
      <SEO title="Web Development Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerOne />

        <div
          className="section section-padding bg-color-light pb--70"
          id="process"
        >
          <SectionTitle
            title={useServiceData.process.sectionTitle}
            textAlignment=""
            textColor="mb--90"
          />
          <div className="container">
            {useServiceData.process.steps.map((data, index) => (
              <AnimationOnScroll
                animateIn={data.animate}
                animateOnce={true}
                delay={100}
                className="d-flex align-items-center"
                key={index}
              >
                <div
                  key={index}
                  className={`process-work ${
                    index % 2 === 1 ? "content-reverse" : ""
                  }`}
                >
                  <Tilty perspective={2000}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={process.env.PUBLIC_URL + data.thumb}
                        alt="Thumbnail"
                        className="size"
                      />
                    </div>
                  </Tilty>
                  <div className="content">
                    <span className="subtitle">{data.subtitle}</span>
                    <h3 className="title">{data.title}</h3>
                    <p>{data.paragraph}</p>
                  </div>
                </div>
              </AnimationOnScroll>
            ))}
          </div>
          <ul className="shape-group-17 list-unstyled">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"}
                alt="Bubble"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-4">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-5">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
                alt="Line"
              />
            </li>
            <li className="shape shape-6">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
                alt="Line"
              />
            </li>
          </ul>
        </div>

        <div className="section section-padding-2 bg-color-dark" id="benefits">
          <div className="container">
            <SectionTitle
              subtitle="Benefits"
              title="Why a Website?"
              textAlignment="heading-light"
              textColor=""
            />
            <div className="row">
              <ServicePropOne
                colSize="col-xl-4 col-md-6"
                serviceStyle=""
                itemShow="6"
              />
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-9.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"}
                alt="Circle"
              />
            </li>
          </ul>
        </div>
        <div className="section bg-color-light section-padding">
          <div className="container" id="pricing">
            <SectionTitle
              subtitle="Pricing"
              title="Reasonable & Flexible Options"
              textAlignment=""
              textColor=""
            />
            <PricingOne />
          </div>
          <ul className="list-unstyled shape-group-3">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-1.png"}
                alt="shape"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"}
                alt="shape"
              />
            </li>
          </ul>
        </div>
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default DigitalAgency;
