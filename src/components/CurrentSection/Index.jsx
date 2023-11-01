import { useNavigate } from "react-router-dom";

import useLocation from "../../hooks/useLocation";
import SECTION_ROUTES from "../../constants/routesConstants";

import "./CurrentSection.css";

const CurrentSection = () => {
  const { section } = useLocation();

  const history = useNavigate();

  const goTo = () => {
    window.scrollTo(0, 0);
    for (const routeName in SECTION_ROUTES) {
      if (section.includes(routeName)) {
        history(SECTION_ROUTES[routeName]);
      }
    }
  };

  return (
    <>
      {section && (
        <div onClick={goTo} className="current-section--breadcrum">
          <h3>{section}</h3>
        </div>
      )}
    </>
  );
};

export default CurrentSection;
