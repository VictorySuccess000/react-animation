import React from "react";
import "./PageCourse.css";
// import PageCourse_Chain from "../assets/PageCourse_Chain.svg";
import PageCourse_Frame from "../assets/PageCourse_Frame.svg";

const PageCourse = () => {
  return (
    <>
      <div className="PageCourse">
        <img src={PageCourse_Frame} alt="" />
        {/* <div className="PageCourse-dashboard">
          <div className="PageCourse-dashboard-search">
            <img src={PageCourse_Search} alt="" />
          </div>
          <div className="PageCourse-dashboard-xtext">Find your course</div>
          <div className="PageCourse-dashboard-xxtext">
            Check to see if any students are mentoring your course or subject
          </div>
          <div className="PageCourse-dashboard-harsea">
            <span className="PageCourse-dashboard-har">
              <img src={PageCourse_Chain} alt="" />
              &nbsp; Harvard University
            </span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PageCourse;
