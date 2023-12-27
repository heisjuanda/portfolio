/* eslint-disable react/prop-types */
import { createContext, useMemo, useState } from "react";

import { getLoading } from "../localStorage/localStorage";

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState({});
  const [isLoading, setIsLoading] = useState(getLoading());

  window.scrollTo(0, 0);

  const values = useMemo(
    () => ({
      showNotification,
      setShowNotification,
      notificationContent,
      setNotificationContent,
      isLoading,
      setIsLoading
    }),
    [
      showNotification,
      setShowNotification,
      notificationContent,
      setNotificationContent,
      isLoading,
      setIsLoading
    ]
  );

  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
