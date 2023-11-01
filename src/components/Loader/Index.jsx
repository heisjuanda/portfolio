import "./Loader.css";

const Loader = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <div className="loader--lazy__container">
        <span className="loader--lazy"></span>
      </div>
    );
  }

  return <span className="loader--lazy"></span>;
};

export default Loader;
