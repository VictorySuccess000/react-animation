import React from "react";

import Page2Frame0 from "../assets/1.svg";
import Page2Frame1 from "../assets/2.svg";
// import Page2Frame2 from "../assets/page2_Frame2.svg";
import Page2Frame3 from "../assets/3.svg";
import Page2Content1 from "../assets/4.svg";
import Page2Content from "../assets/page2_Content.svg";
import Page2Footer from "../assets/page2_Footer.svg";

const Page2Contents = () => {
  return (
    <>
      <div className="PageFooter">
        <img src={Page2Frame0} alt="" />
        <img src={Page2Frame1} style={{ marginTop: 30 }} alt="" />
        {/* <img src={Page2Frame2} alt="" /> */}
        <img src={Page2Frame3} style={{ marginTop: 30 }} alt="" />
        <img src={Page2Content1} style={{ marginTop: 30 }} alt="" />
        <img src={Page2Content} style={{ marginTop: 30 }} alt="" />
        <img src={Page2Footer} alt="" />
      </div>
    </>
  );
};

export default Page2Contents;
