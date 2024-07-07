/* eslint-disable react/prop-types */


const Button = ({ children, variant, onClick }) => {
  const baseStyle = "text-white text-xs py-2 px-4 rounded";

  const variantStyle = {
    primary: "bg-primary-100 hover:bg-opacity-90 text-white",
    secondary: "bg-primary-200 border hover:bg-gray-700 hover:text-primary-100 rounded-[50%]",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",

};

  return (
    <button className={`${baseStyle} ${variantStyle[variant]}`} onClick={onClick ? () => onClick() : undefined}>
      {children}
    </button>
  );
} 

export default Button; 

