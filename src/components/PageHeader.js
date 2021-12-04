import React from "react";
import "./PageHeader.css";
import MainLogo from "../assets/PageHeader_Logo.svg";

const PageHeader = () => {
  return (
    <>
      <div className="PageHeader">
        <div className="PageHeader-title">
          <div className="PageHeader-title-text">
            Pre-Registration is now open for mentors! Sign-up for a chance to
            win an iPad!
          </div>
          <div className="PageHeader-title-cancel"></div>
        </div>

        <div className="PageHeader-nav">
          <span className="PageHeader-nav-logo">
            <span className="PageHeader-nav-logoPic">
              <img src={MainLogo} alt="" />
            </span>
            <span className="PageHeader-nav-logoText">rhizo</span>
          </span>
          <span className="PageHeader-nav-menu">
            <span className="PageHeader-nav-item">Home</span>
            <span className="PageHeader-nav-item">How it works</span>
            <span className="PageHeader-nav-item">About us</span>
          </span>
          <span className="PageHeader-nav-btnTool">
            <span className="PageHeader-nav-btnLogin">Login in</span>
            <span className="PageHeader-nav-btnRegister">Register</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
