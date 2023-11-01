import { useEffect } from "react";
import gsap from "gsap";

import "./HomeLoader.css";

const HomeLoader = () => {

  useEffect(() => {
    const handleLoader = () => {
      gsap.from(".loader-1", {
        width: 0,
      });

      gsap.from(".loader-2", {
        width: 0,
      });

      gsap.to(".loader-1", {
        width: "200px",
        duration: 1.5,
        ease: "power2.inOut",
      });

      gsap.to(".loader-2", {
        width: "100px",
        duration: 1.5,
        ease: "power2.inOut",
      });

      gsap.to(".loader", {
        background: "none",
        delay: 1.5,
        duration: 0.1,
      });

      gsap.to(".loader-1", {
        rotate: 90,
        y: -50,
        x: 50,
        duration: 0.4,
        delay: 1.5,
      });

      gsap.to(".loader-1 .loader-squares", {
        opacity: 1,
        duration: 0.4,
        delay: 1.5,
      });

      gsap.to(
        ".loader-2",
        {
          x: -175,
          y: 75,
          duration: 0.4,
        },
        "<"
      );

      gsap.to(".loader", {
        scale: 40,
        rotate: -45,
        duration: 0.5,
        delay: 2.5,
        x: 1600,
        y: 2000,
        ease: "power2.inOut",
      });

      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        delay: 3,
        display: "none",
        ease: "power1.inOut",
      });
    };
    handleLoader();
  }, []);

  return (
    <>
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-1 bar">
          <div className="loader-squares"></div>
          </div>
          <div className="loader-2 bar"></div>
        </div>
      </div>
    </>
  );
};

export default HomeLoader;
