import React, { useState } from "react";
import { string, bool, number } from "prop-types";

import "./textbox.css";

const TextBox = ({
  label,
  value,
  type,
  isMulti,
  isRequired,
  error,
  bottomHelperText,
  isCounterRequired,
  ...props
}) => {
  // Determine whether its a input box or mutli line (textarea)
  const Tag = isMulti ? "textarea" : "input";

  const [isFocused, setIsFocused] = useState(false);

  const onFocusChange = () => setIsFocused(true);
  const onBlurChange = () => setIsFocused(false);

  return (
    <div styleName="wrapper" className="wrapper-textbox">
      {label && (
        <div styleName={`label ${isFocused ? "label-focus" : ""}`}>
          {label}
          {isRequired ? <span>*</span> : ""}
        </div>
      )}
      <Tag
        type={type}
        value={value || ""}
        styleName="textbox"
        className="textbox"
        onFocus={onFocusChange}
        onBlur={onBlurChange}
        {...props}
      />
      {error && <span styleName="error">{error}</span>}
      <div styleName="bottom-wrapper">
        {bottomHelperText && <span>{bottomHelperText}</span>}

        {isCounterRequired ? (
          <span styleName="counter-value">
            {value ? value.length : 0}/{props.maxLength}
          </span>
        ) : null}
      </div>
    </div>
  );
};

TextBox.defaultProps = {
  type: "text",
  label: null,
  isRequired: false,
  isMulti: false,
  isCounterRequired: false,
};

TextBox.propTypes = {
  type: string,
  value: string,
  error: string,
  label: string,
  isRequired: bool,
  isMulti: bool,
  isCounterRequired: bool,
  bottomHelperText: string,
  maxLength: number,
};

export default TextBox;
