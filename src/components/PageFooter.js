import React from "react";
import "./PageFooter.css";

import PageSection from "../assets/PageSection.svg";
import PageFooterSection1 from "../assets/PageFooter_One.svg";
import PageFooterSection2 from "../assets/PageFooter_Two.svg";

const PageFooter = () => {
  return (
    <>
      <div className="PageFooter">
        <img src={PageSection} alt="" />
        <img src={PageFooterSection1} alt="" />
        <img src={PageFooterSection2} alt="" />
      </div>
    </>
  );
};

export default PageFooter;
