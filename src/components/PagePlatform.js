import React from "react";
import "./PagePlatform.css";
import PagePlatform_Book from "../assets/PagePlatform_Book.svg";
import PagePlatform_Check from "../assets/PagePlatform_Check.svg";

const PagePlatform = () => {
  return (
    <>
      <div className="PagePlatform">
        <div className="PagePlatform-left">
          <div className="PagePlatform-left-logo">
            <img src={PagePlatform_Book} alt="" />
          </div>
          <div className="PagePlatform-left-xtest">
            A platform designed for your learning needs
          </div>
          <div className="PagePlatform-left-xxtest">
            Schedule sessions when and whereever you want them.
          </div>
          <div className="PagePlatform-left-textItem">
            <div>
              <img src={PagePlatform_Check} alt="" />
              Personalized hours
            </div>
            <div>
              <img src={PagePlatform_Check} alt="" />
              Flexible meeting locations
            </div>
            <div>
              <img src={PagePlatform_Check} alt="" />
              Endless courses
            </div>
          </div>
        </div>
        <div className="PagePlatform-right"></div>
      </div>
    </>
  );
};

export default PagePlatform;
