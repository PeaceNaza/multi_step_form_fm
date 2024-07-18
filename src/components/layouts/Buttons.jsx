/* eslint-disable react/prop-types */


  const Button = ({ children, variant, onClick, isActive }) => {
  const baseStyle = "text-white text-xs rounded";

  const variantStyle = {
    primary: "bg-primary-100 hover:bg-opacity-90 text-white px-3 py-2",
    secondary:
      ` rounded-[50%] font-semibold px-3 py-2 text-xs ${isActive ? " bg-primary-400 text-primary-100" : 'bg-primary-200 border'}`,
    tertiary:
      "bg-secondary-300 text-secondary-200  hover:text-primary-100 rounded px-3 py-2 font-bold",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
  };

  return (
    <button
      type="submit"
      className={`${baseStyle} ${variantStyle[variant]}`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
