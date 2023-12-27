import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import gsap from "gsap";

import { PortfolioContext } from "../../context/PortfolioContext";

import CurrentSection from "../../components/CurrentSection/Index";
import Button from "../../components/Button/Index";

import { updateLoadingStatus } from "../../localStorage/localStorage";
import {
  getNextProject,
  getPreviousProject,
} from "../../helpers/getNextProject";

import useProject from "../../hooks/useProject";

import "./Project.css";

const Project = () => {
  const { setIsLoading } = useContext(PortfolioContext);

  const [isDisabled, setIsDisabled] = useState(false);

  const { handle } = useParams();

  const history = useNavigate();

  const { currentProject } = useProject(handle);

  const handleNextHandle = (isNext) => {
    const nextHandle = isNext
      ? getNextProject(handle)
      : getPreviousProject(handle);
    setIsDisabled(true);
    gsap.to(".project-section__container header h1 span", {
      translateY: "100%",
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(".project-section__container header h4 span", {
      translateY: "100%",
      duration: 0.5,
      ease: "power4.in",
    });
    gsap.to("article", {
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
    });

    setTimeout(() => {
      history(`/work/${nextHandle}`);
      setIsDisabled(false);
    }, 501);
  };

  useEffect(() => {
    setIsLoading(false);
    updateLoadingStatus(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleTitleReveal = () => {
      window.scrollTo(0, 0);
      gsap.to(".container-project--name", {
        translateY: "0",
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out",
      });
      gsap.to(".container-project--category", {
        translateY: "0",
        duration: 0.5,
        delay: 0.5,
        ease: "power4.out",
      });
      gsap.to("article", {
        opacity: "1",
        duration: 0.5,
        delay: 0.5,
        ease: "power4.in",
      });
    };
    handleTitleReveal();
  }, [currentProject]);

  return (
    <main className="project-section">
      <CurrentSection />
      <section className="project-section__container">
        <header>
          {currentProject?.name && (
            <h1>
              <span className="container-project--name">{currentProject.name}</span>
            </h1>
          )}
          {currentProject?.category && (
            <h4>
              <span className="container-project--category">
                {Array.isArray(currentProject.category) &&
                  currentProject.category.map((category, index) => {
                    if (index === currentProject.category.length - 1)
                      return category;
                    return category + " - ";
                  })}
              </span>
            </h4>
          )}
        </header>
        <article>
          {currentProject?.description && (
            <div className="project-description">
              <p>{currentProject.description}</p>
            </div>
          )}
        </article>
        <article className="project-navigation--control">
          <Button
            click={() => {
              handleNextHandle(true);
            }}
            text="Next"
            disabled={isDisabled}
          />
          <Button
            click={() => {
              handleNextHandle(false);
            }}
            text="Back"
            disabled={isDisabled}
          />
        </article>
        <article className="project-demo">
          {currentProject?.demo && (
            <div>
              <LazyLoadImage
                src={currentProject.demo}
                alt={`${currentProject.name}'s demo`}
                effect="blur"
              />
            </div>
          )}
        </article>
        <article>
          {currentProject?.tech && (
            <ul className="project-tech--stack">
              {Array.isArray(currentProject.tech) &&
                currentProject.tech.map((tech, key) => (
                  <li key={key}>{tech}</li>
                ))}
            </ul>
          )}
        </article>
        <article>
          {currentProject?.repo && (
            <h3 className="project-repository">
              <a href={currentProject.repo}>
                See details
              </a>
            </h3>
          ) }
        </article>
        <article>
          {currentProject?.details && (
            <ul className="project-details">
              {Array.isArray(currentProject.details) &&
                currentProject.details.map((images, key) => (
                  <li key={key}>
                    <LazyLoadImage
                      effect="blur"
                      src={images}
                      alt={`${currentProject.name}'s demo picture`}
                    />
                  </li>
                ))}
            </ul>
          )}
        </article>
      </section>
    </main>
  );
};

export default Project;
