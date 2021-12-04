import { useRoutes, Navigate } from "react-router";
import { PAGE_FOUR, PAGE_ONE, PAGE_THREE, PAGE_TWO } from "./AppConfig";
import PageOne from "../views/PageOne.js";
import PageTwo from "../views/PageTwo.js";
import PageThree from "../views/PageThree.js";
import PageFour from "../views/PageFour.js";

export const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <Navigate to={PAGE_ONE} /> },
    { path: PAGE_ONE, element: <PageOne /> },
    { path: PAGE_TWO, element: <PageTwo /> },
    { path: PAGE_THREE, element: <PageThree /> },
    { path: PAGE_FOUR, element: <PageFour /> },
  ]);
  return routes;
};
