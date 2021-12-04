import React from "react";

import PageHeader from "../components/PageHeader";
import PageMentorship from "../components/PageMentorship";
import PageCourse from "../components/PageCourse";
import PagePlatform from "../components/PagePlatform";
import PageFooter from "../components/PageFooter";

const PageOne = () => {
  return (
    <>
      <PageHeader />
      <PageMentorship />
      <PageCourse />
      <PagePlatform />
      <PageFooter />
    </>
  );
};

export default PageOne;
