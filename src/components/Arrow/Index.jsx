import arrow from "/icons/arrow.png";

import "./Arrow.css";

const Arrow = () => {
  return (
    <div className="arrow__container">
      <div>
        <img src={arrow} alt="arrow link" />
        <img src={arrow} alt="arrow link" />
      </div>
    </div>
  );
};

export default Arrow;
