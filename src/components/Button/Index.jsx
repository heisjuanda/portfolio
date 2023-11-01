import "./Button.css";

const Button = ({ text, link, click, style, type, disabled, child }) => {
  return (
    <button
      onClick={click}
      type={type}
      className={`custom-button ${style && style}`}
      disabled={disabled}
    >
      {link ? (
        <a href={link}>
          <p>{text}</p>
        </a>
      ) : (
        <>
          {text && <p>{text}</p>}
          {child ? child : null}
        </>
      )}
    </button>
  );
};

export default Button