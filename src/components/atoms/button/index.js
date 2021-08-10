import React from "react";
import { func, string } from "prop-types";

import "./button.css";

const Button = ({ content, onClick, type, className, ...props }) => (
  <button
    styleName={`wrapper ${type}`}
    onClick={onClick}
    className={className}
    {...props}
  >
    {content}
  </button>
);

Button.defaultProps = {
  content: "",
  type: "type2",
  className: "button",
};

Button.propTypes = {
  onClick: func,
  content: string,
  type: string,
  className: string,
};

export default Button;
