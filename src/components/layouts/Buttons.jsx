/* eslint-disable react/prop-types */

const Button = ({ children, variant, onClick, isActive, isCompleted }) => {
  const baseStyle = "text-xs hover:bg-opacity-80 ";

  const variantStyle = {
    primary: "text-white rounded-md bg-primary-100 text-white px-4 py-2",
    secondary: `
    rounded-[50%] font-semibold px-2.5 py-1.5 text-xs
    ${isCompleted ? "bg-primary-400 text-primary-100" : isActive ? "bg-primary-400 text-primary-100" : "bg-primary-200 text-white border"}
  `,

    tertiary: "text-gray-400 hover:text-primary-100 px-3 py-2 font-semibold",
    confirm: "text-white bg-primary-200 px-4 py-2 rounded-md",
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
