import React from "react";
import { func, string } from "prop-types";

const Button = ({ content, onClick }) => (
  <button onClick={onClick}>{content}</button>
);

Button.defaultProps = {
  content: "",
};

Button.propTypes = {
  onClick: func,
  content: string,
};

export default Button;
