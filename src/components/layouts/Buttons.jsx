/* eslint-disable react/prop-types */

const Button = ({ children, variant, onClick }) => {
  const baseStyle = "text-white text-xs rounded";

  const variantStyle = {
    primary: "bg-primary-100 hover:bg-opacity-90 text-white px-3 py-2",
    secondary:
      "bg-primary-200 border hover:bg-primary-400 hover:text-primary-100 rounded-[50%] px-3 py-2",
      tertiary:"bg-secondary-400 text-secondary-200  hover:text-primary-100 rounded px-3 py-2 font-bold",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
  };

  return (
    <button type="button"
      className={`${baseStyle} ${variantStyle[variant]}`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
