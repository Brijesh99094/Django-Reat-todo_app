import React from "react";
const Button = ({ text, onClick ,  }) => {
  return <button className="m-2 p-2 " onClick={onClick}>{text}</button>;
};
export default Button;
