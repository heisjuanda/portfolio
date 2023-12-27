import { useContext, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { PortfolioContext } from "../../context/PortfolioContext";

import CurrentSection from "../../components/CurrentSection/Index";

import { updateLoadingStatus } from "../../localStorage/localStorage";
import {
  HEISJUANDA_PICTURES,
  HEISJUANDA_DESCRIPTION,
} from "../../constants/aboutConstants";

import "./About.css";

const About = () => {
  const { setIsLoading } = useContext(PortfolioContext);

  useEffect(() => {
    updateLoadingStatus(false);
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="about-section">
      <CurrentSection />
      <section className="about-section__container">
        <header>
          <h2>Who is he?</h2>
          <p>
            Simple, he is <span>JuanDa!</span>
          </p>
        </header>
        <article>
          <div>
            <div></div>
            {HEISJUANDA_DESCRIPTION && <p>{HEISJUANDA_DESCRIPTION}</p>}
          </div>
          <ul>
            {Array.isArray(HEISJUANDA_PICTURES) &&
              HEISJUANDA_PICTURES.map((picture) => (
                <li key={picture}>
                  <LazyLoadImage
                    src={picture}
                    alt="pictire about Juan David Moreno Alfonso (heisjuanda)"
                    effect="blur"
                  />
                </li>
              ))}
          </ul>
        </article>
      </section>
      <section className="about-section__tech--stack">

      </section>
    </main>
  );
};

export default About;
