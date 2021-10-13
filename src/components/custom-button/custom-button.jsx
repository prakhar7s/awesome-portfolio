import "./custom-button.css";

const CustomButton = ({ label, color, redirectTo }) => {
  return (
    <a
      href={redirectTo}
      className="custom-button"
      target="_blank"
      style={{ color }}
    >
      {label}
      <span className="line" style={{ background: color }}></span>
    </a>
  );
};

export default CustomButton;
