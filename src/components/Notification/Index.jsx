/* eslint-disable react/prop-types */
import { useContext, useRef, useEffect } from "react";

import { PortfolioContext } from "../../context/PortfolioContext";

import checkIcon from "/icons/checkIcon.png";
import errorIcon from "/icons/errorIcon.png";

import "./Notification.css";

export const Notification = ({ title, message, isError }) => {
  const { setShowNotification } = useContext(PortfolioContext);

  const notificationRef = useRef(null);

  useEffect(() => {
    const showHideAnimation = () => {
      if (!notificationRef.current || !notificationRef.current.style) return;
      setTimeout(() => {
        notificationRef.current.style.transform = "translate(-50%, 20px)";
        notificationRef.current.style.opacity = "1";
      }, 10);

      setTimeout(() => {
        notificationRef.current.style.transform = "translate(-50%, -300px)";
        notificationRef.current.style.opacity = "0";
        setTimeout(() => {
          setShowNotification(false);
        }, 401);
      }, 5000);
    };
    showHideAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={notificationRef} className="notification-body">
      <h2>
        <span>
          <img
            src={isError ? errorIcon : checkIcon}
            alt="icon"
            className="image-wrapper--lazy"
            loading="eager"
          />
        </span>
        {title}
      </h2>
      <p>{message}</p>
    </div>
  );
};
