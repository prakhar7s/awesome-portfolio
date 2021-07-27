import "./custom-button.css";

const CustomButton = ({ label, color }) => {
  return (
    <button className="custom-button" style={{ color }}>
      {label}
      <span className="line" style={{ background: color }}></span>
    </button>
  );
};

export default CustomButton;
