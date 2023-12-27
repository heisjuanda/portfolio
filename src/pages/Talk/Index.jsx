import { useEffect, useContext } from "react";

import { PortfolioContext } from "../../context/PortfolioContext";

import CurrentSection from "../../components/CurrentSection/Index";
import Form from "../../components/Form/Index";

import { updateLoadingStatus } from "../../localStorage/localStorage";

import "./Talk.css";

const Talk = () => {
  const { setIsLoading } = useContext(PortfolioContext);

  useEffect(() => {
    updateLoadingStatus(false);
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <main className="talk-section">
      <CurrentSection />
      <section className="talk-section__container">
        <Form />
      </section>
    </main>
  );
};

export default Talk;
