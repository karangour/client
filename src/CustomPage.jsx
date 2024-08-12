import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./CSS/CustomPage.css";
import ReportSlides from "./ReportSlides";
import Kpi from "./Kpi";
import Graphs from "./Graphs";
import green_arch from "./assets/green-arch.png";
import red_arch from "./assets/red-arch.png";

const slideInFromRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const slideInFromLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const CustomPage = () => {
  const location = useLocation();

  const userData = {
    name: location.state.name,
    email: location.state.email,
    // orgName, type, area - in a real-life scenario, these will be filled by an API call to type using userData.type (the user's type profile link). We are hard-coding it for this example.//
    orgName: location.state.orgName,
    orgType: location.state.type,
    area: location.state.area,
  };

  return (
    <div className="custom-page-container">
      <img src={green_arch} className="green-arch-left" />
      <img src={green_arch} className="green-arch-right" />

      <div className="custom-page">
        <h1 className="title">
          Welcome, <span className="red">{userData.name}</span>
        </h1>
        <h3 className="sub-title">
          This is a page customized for{" "}
          <span className="green">{userData.orgName}</span>'s needs, placing you
          in the pilot's seat of Bicycle's AI.
        </h3>

        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
          className="slides-1"
        >
          {/* We send userData over to ReportSlides where an API call to bicycle's backend reveals the necessary reports based on organization type and user's position. This is then turned into image slides and displayed. */}
          <ReportSlides userData={userData} />
        </motion.div>

        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
          className="slides-2"
        >
          <div className="title-text-slides2">
            <h3 className="sub-title">
              Recommended KPIs for{" "}
              <span className="red">{userData.orgName}</span>
            </h3>
          </div>
          {/* We send organization type (ie retail, fintech) and user's position in the company as props to the 'Kpi' component, which in-turn finds the appropriate Kpi's for the organization (max 4 let's say) and displays them as clickable slides. Even the description of this page will be rendered within the Kpi component as its text will need to be customized based on organization type and user's position. For the sake of this example, we are calling 'Kpi' with userData, but it's only been setup (hardcoded) for organization type: 'retail' and user position: 'sales' right now.*/}
          <Kpi userData={userData} />
        </motion.div>

        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
          className="slides-3"
        >
          <img src={red_arch} className="red-arch-left" />
          <img src={red_arch} className="red-arch-right" />
          <div className="title-text-slides3">
            <h3 className="sub-title">
              Active Insights for{" "}
              <span className="red">{userData.orgName}</span>
            </h3>
          </div>
          {/* We send userData to 'Graphs', where it calls bicycle's backend using the organization type, and user position in the organization, to find the relevant copilots to display for the user. For the sake of this example, the organization type is 'retail', hence the copilot being displayed is that of orders.  */}
          <Graphs userData={userData} />
        </motion.div>
      </div>
    </div>
  );
};

export default CustomPage;
