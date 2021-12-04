import React from "react";
import "./PageMentorship.css";
import PageMentorship_Frame from "../assets/PageMentorship_Frame.svg";

const PageMentorship = () => {
  return (
    <>
      <div className="PageMentorship">
        <div className="PageMentorship-xtitle">JOIN RHIZO</div>
        <div className="PageMentorship-xxtitle">
          Student Mentorship at Your Fingertips
        </div>
        <div className="PageMentorship-xxxtitle">
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna.
        </div>
        <div className="PageMentorship-btnItem">
          <span className="PageMentorship-btnItem-gs">Getting started</span>
          <span className="PageMentorship-btnItem-space">&nbsp;&nbsp;</span>
          <span className="PageMentorship-btnItem-hiw">How it works</span>
        </div>
        <div className="PageMentorship-frame">
          <img src={PageMentorship_Frame} alt="" />
        </div>
      </div>
    </>
  );
};

export default PageMentorship;
