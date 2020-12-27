import React from "react";
import { func, string } from "prop-types";

import "./button.css";

const Button = ({ content, onClick }) => (
  <button styleName="wrapper" onClick={onClick}>
    {content}
  </button>
);

Button.defaultProps = {
  content: "",
};

Button.propTypes = {
  onClick: func,
  content: string,
};

export default Button;
