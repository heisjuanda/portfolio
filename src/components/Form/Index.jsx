import { useContext, useState, useRef } from "react";

import { PortfolioContext } from "../../context/PortfolioContext";
import sendEmail from "../../helpers/sendEmail";

import Arrow from "../Arrow/Index";
import Button from "../Button/Index";
import Loader from "../Loader/Index";

import "./Form.css";

const Form = () => {
  const { setShowNotification, setNotificationContent } =
    useContext(PortfolioContext);

  const [isLoading, setIsloading] = useState(false);

  const inputsRef = useRef([]);
  const emailDecorationRef = useRef();

  const spaceRegex = /^\s+/;
  const nameRegex = /^[A-Za-z -]*$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validateFields = (value) => {
    const refactor = {
      Name: () => {
        if (value.name.length <= 1) return [false, "At least 2 letters"];
        if (value.name.length > 31) return [false, "Less than 31 letters"];
        if (!value.name.match(nameRegex)) return [false, "Only letters"];
        if (value.name.match(spaceRegex))
          return [false, "Remove the white space"];
        return [true, ""];
      },
      Email: () => {
        if (value.email.match(spaceRegex))
          return [false, "Remove the white space"];
        if (!value.email.match(emailRegex)) return [false, "Is not valid"];
        return [true, ""];
      },
      Message: () => {
        if (value.message.length < 4) return [false, "At least 5 letters"];
        if (value.message.length > 101) return [false, "Less than 101 letters"];
        return [true, ""];
      },
    };
    for (const prop in refactor) {
      const [state, message] = refactor[prop]();
      if (!state) return [state, message, prop];
    }
    return [true, "Sent successfully!", undefined];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowNotification(false);

    const formValues = Object.fromEntries(new window.FormData(e.target));
    const [state, message, prop] = validateFields(formValues);

    inputsRef.current = Array.from(document.querySelectorAll(".form-input"));

    if (state) {
      setIsloading(true);
      let isSuccess = false;
      try {
        isSuccess = await sendEmail(
          formValues.name,
          formValues.email,
          formValues.message
        );
      } catch (error) {
        console.error(error);
      }
      if (isSuccess) {
        setShowNotification(true);
        if (inputsRef.current.length > 0) {
          for (const input of inputsRef.current) {
            input.value = "";
          }
        }
        setNotificationContent(() => ({
          title: "Sent",
          message: message,
          isError: !isSuccess,
        }));
      } else {
        setShowNotification(true);
        setNotificationContent(() => ({
          title: "Error",
          message: "wasn't sent, try again",
          isError: !isSuccess,
        }));
      }
    } else {
      setShowNotification(true);
      setNotificationContent(() => ({
        title: prop,
        message: message,
        isError: !state,
      }));
    }
    setIsloading(false);
  };

  const handleMouseEnter = () => {
    const decorator = emailDecorationRef.current.querySelector("div");
    decorator.style.opacity = "1";
    decorator.style.transform = "translateX(0%)";
  };
  
  const handleMouseLeave = () => {
    const decorator = emailDecorationRef.current.querySelector("div");
    decorator.style.transform = "translateX(100%)";
    setTimeout(() => {
      decorator.style.opacity = "0";
      decorator.style.transform = "translateX(-100%)";
    }, 300);
  };

  return (
    <div className="form-body">
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <h2>{"Let's talk"} <span><Arrow/></span> </h2>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="form-input"
            name="name"
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            name="email"
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="form-input"
            name="message"
            id="message"
            required
          ></textarea>
        </div>
        <div>
          <Button
            child={isLoading ? <Loader /> : <p>Send</p>}
            disabled={isLoading}
          />
        </div>
      </form>
      <div className="form-body__email">
        <h1
          ref={emailDecorationRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="mailto:heisjuanda@gmail.com"> heisjuanda@gmail.com</a>{" "}
          <div></div>
        </h1>
        <span>{"Let's create amazing stuff!"}</span>
        <ol>
          <li>
            <h6>
              <a
                href="https://wa.me/573172824995"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </h6>
          </li>
          <li>
            <h6>
              <a
                href="https://github.com/heisjuanda"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </h6>
          </li>
          <li>
            <h6>
              <a
                href="https://www.instagram.com/heisjuanda/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </h6>
          </li>
          <li>
            <h6>
              <a
                href="https://www.linkedin.com/in/juan-david-moreno-883a46233/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </h6>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Form;
