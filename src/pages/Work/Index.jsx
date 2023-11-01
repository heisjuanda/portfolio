import { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import { PortfolioContext } from "../../context/PortfolioContext";

import CurrentSection from "../../components/CurrentSection/Index";

import { updateLoadingStatus } from "../../localStorage/localStorage";

import { WORK_PROJECTS } from "../../constants/workConstants";

import "./Work.css";

const Work = () => {
  const { setIsLoading } = useContext(PortfolioContext);
  const itemsRef = useRef([]);

  const history = useNavigate();

  const handleClickProject = (project) => {
    if (typeof project !== "object" || !project) return;

    gsap.to(".item-text h1", {
      duration: 1,
      opacity: "0",
      ease: "power2.inOut",
    });

    gsap.to(".item-img img", {
      duration: 1,
      scale: "0",
      ease: "power2.inOut",
    });
    
    setTimeout(() => {
      history(`/work/${project.handle}`);
    }, 1001);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    updateLoadingStatus(false);
    setIsLoading(false);

    const handleImagesScale = () => {
      itemsRef.current = document.querySelectorAll(".item");
      for (const element of itemsRef.current) {
        const img = element.querySelector(".item-img");
        gsap.set(img, { scale: 0 });
      }
    };
    const setScale = () => {
      for (const element of itemsRef.current) {
        const img = element.querySelector(".item-img");
        const rect = element.getBoundingClientRect();

        const viewportHeight = window.innerHeight;
        const itemCenter = rect.top + rect.height / 2;

        const distanceFromCenter = Math.abs(viewportHeight / 2 - itemCenter);

        const progress = distanceFromCenter / (viewportHeight / 2);

        const adjustedProgress = Math.pow(progress, 2);

        let scale = 1 - adjustedProgress * 0.5;
        scale = Math.max(0, Math.min(scale, 1));

        gsap.to(img, { scale: scale, duration: 0.1 });
      }
    };
    handleImagesScale();
    setScale();
    window.addEventListener("scroll", setScale);

    return () => {
      window.removeEventListener("scroll", setScale);
    };
  }, []);

  return (
    <main className="work-section">
      <section className="work-section__container">
        <header>
          <CurrentSection />
        </header>
        {WORK_PROJECTS.length > 0 &&
          WORK_PROJECTS.map((project) => (
            <div key={project.key} className="item">
              <div className="item-text">
                <h1>{project.name}</h1>
              </div>
              <div
                className="item-img"
                onClick={() => {
                  handleClickProject(project);
                }}
              >
                <img
                  src={project.mainPicutre}
                  alt="project poster"
                  loading="eager"
                />
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Work;
