import { lazy, Suspense, useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { PortfolioContext } from "../context/PortfolioContext";

import Menu from "../components/Menu/Index";
import Loader from "../components/Loader/Index";
import { Notification } from "../components/Notification/Index";
import Home from "../pages/Home/Index";

const ErrorPage = lazy(() => import("../pages/ErrorPage/Index"));
const About = lazy(() => import("../pages/About/Index"));
const Work = lazy(() => import("../pages/Work/Index"));
const Project = lazy(() => import("../pages/Project/Index"));
const Talk = lazy(() => import("../pages/Talk/Index"));

export const RoutesConfiguration = () => {
  const { showNotification, notificationContent } =
    useContext(PortfolioContext);

  return (
    <Router>
      <Menu />
      {showNotification && (
        <Notification
          title={notificationContent.title}
          message={notificationContent.message}
          isError={notificationContent.isError}
        />
      )}
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader fullScreen />}>
              <ErrorPage />
            </Suspense>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader fullScreen />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/work"
          element={
            <Suspense fallback={<Loader fullScreen />}>
              <Work />
            </Suspense>
          }
        />
        <Route
          path="/work/:handle"
          element={
            <Suspense fallback={<Loader fullScreen />}>
              <Project />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader fullScreen />}>
              <Talk />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};
