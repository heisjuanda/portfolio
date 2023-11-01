import { useState, useEffect } from "react";

import getPrettyLocation from "../helpers/getPrettyLocation";

const useLocation = () => {
  const [section, setSection] = useState();

  useEffect(() => {
    const currentLocation = window.location.pathname;
    
    setSection(getPrettyLocation(currentLocation));
  }, []);

  return { section };
};

export default useLocation;
