import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Home Pages Import
import DigitalAgency from "./pages/DigitalAgency";
import CreativeAgency from "./pages/CreativeAgency";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import HomeStartup from "./pages/HomeStartup";
import CorporateAgency from "./pages/CorporateAgency";

// Blog Import
import BlogGridView from "./pages/BlogGrid";
import BlogCategory from "./pages/Category";
import BlogArchive from "./pages/Archive";
import BlogDetails from "./pages/BlogDetails";

// Service
import ServiceOne from "./pages/ServiceOne";
import ServiceTwo from "./pages/ServiceTwo";
import ServiceDetails from "./pages/ServiceDetails";

// Project
import ProjectGridOne from "./pages/ProjectGridOne";
import ProjectGridTwo from "./pages/ProjectGridTwo";
import ProjectGridThree from "./pages/ProjectGridThree";
import ProjectGridFive from "./pages/ProjectGridFive";
import ProjectGridFour from "./pages/ProjectGridFour";
import ProjectDetails from "./pages/ProjectDetails";

// Pages
import AboutUs from "./pages/AboutUs";
import OurOffice from "./pages/OurOffice";
import OurClients from "./pages/OurClients";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import CaseStudy from "./pages/CaseStudy";
import CaseDetails from "./pages/CaseStudyDetails";
import Testimonials from "./pages/Testimonials";
import PricingTable from "./pages/PricingTable";
import Typography from "./pages/Typography";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Css Import
import "./assets/scss/app.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path={"/"} element={<DigitalAgency />} />

          {/* Pages  */}
          <Route path={"/404"} element={<ErrorPage />} />
          <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
          <Route path={"/terms-use"} element={<TermsOfUse />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
