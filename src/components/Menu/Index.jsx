import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gsap from "gsap";

import MENU_OPTIONS from "../../constants/menuConstants";

import "./Menu.css";

const Menu = () => {
  const history = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  const handleMenuBton = (isOpen) => {
    const transformValue = isOpen ? "7px" : "0px";
    const rotateValue = isOpen ? "45deg" : "0deg";
    const opacityValue = isOpen ? "0" : "1";

    gsap.to("#burger-btn__one", {
      translateY: transformValue,
      rotate: rotateValue,
      duration: 0.3,
    });
    gsap.to("#burger-btn__two", {
      opacity: opacityValue,
      duration: 0.3,
    });
    gsap.to("#burger-btn__three", {
      translateY: `-${transformValue}`,
      rotate: `-${rotateValue}`,
      duration: 0.3,
    });
  };

  const openAnimation = () => {
    gsap.to(".menu-container", {
      translateX: "-25%",
      duration: 0.4,
      ease: "power1.inOut",
    });
    gsap.to(".text-link__nav", {
      opacity: "1",
      delay: 0.3,
      duration: 0.3,
      ease: "power1.inOut",
    });
    gsap.to(".menu-options", {
      display: "block",
    });
  };

  const closeAnumation = () => {
    gsap.to(".text-link__nav", {
      opacity: "0",
      delay: 0,
      duration: 0.3,
      ease: "power1.inOur",
    });
    gsap.to(".menu-options", {
      display: "none",
      delay: 0.2,
    });
    gsap.to(".menu-container", {
      translateX: "50%",
      duration: 0.4,
      ease: "power1.inOut",
    });
    gsap.to(".menu-container", {
      translateX: "-100%",
      delay: 0.4,
      duration: 0,
    });
  };

  const handleMenu = () => {
    setIsDisabledBtn(true);
    setTimeout(() => {
      setIsDisabledBtn(false);
    }, 400);

    if (!isOpen) {
      openAnimation();
    } else {
      closeAnumation();
    }
    handleMenuBton(!isOpen);
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    gsap.to(".text-link__nav", {
      delay: 0,
      opacity: "0",
      duration: 0.3,
    });
    gsap.to(".menu-options", {
      display: "none",
      delay: 0,
      duration: 0.3,
    });
    gsap.to(".menu-container", {
      translateX: "50%",
      duration: 0.4,
      ease: "power1.inOut",
    });
    handleMenuBton(!isOpen);
    setIsOpen((prevIsOpen) => !prevIsOpen);
    gsap.to(".menu-container", {
      translateX: "-100%",
      delay: 0.4,
      duration: 0
    });
  };

  return (
    <>
      <button
        role="button"
        title="burger-menu"
        className="burger-btn interactable"
        onClick={handleMenu}
        disabled={isDisabledBtn}
      >
        <span id="burger-btn__one"></span>
        <span id="burger-btn__two"></span>
        <span id="burger-btn__three"></span>
      </button>
      <div className="menu-container"></div>
      <div className="menu-options">
        <nav className="menu-options__nav">
          <ol>
            {Array.isArray(MENU_OPTIONS) &&
              MENU_OPTIONS.map((option) => (
                <li key={option.path}>
                  <p className="text-link__nav">
                    <span
                      className="interactable"
                      data-type="menu-option"
                      onClick={() => {
                        history(option.path);
                        handleCloseMenu();
                      }}
                    >
                      {option.name}
                    </span>
                  </p>
                </li>
              ))}
            <li>
              <p className="text-link__nav" id="text-close__nav">
                <span
                  className="interactable"
                  data-type="menu-option"
                  onClick={() => {
                    handleCloseMenu();
                  }}
                >
                  Close
                </span>
              </p>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Menu;
