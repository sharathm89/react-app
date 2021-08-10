import React, { useState } from "react";

import { withStore } from "../../../../stories";

import TextBox from "./index";

function UITextBox1() {
  const [value, setValue] = useState();
  const [error, setError] = useState();

  const onChangeFunc = (e) => {
    setValue(e.target.value);

    e.target.value ? setError("") : setError("Field cannot be left empty !!");
  };

  return (
    <div style={{ maxWidth: "250px" }}>
      <TextBox
        value={value}
        error={error}
        onChange={onChangeFunc}
        label="Mobile"
      />
    </div>
  );
}

function UITextBox2() {
  const [value, setValue] = useState();
  const [error, setError] = useState();

  const onChangeFunc = (e) => {
    setValue(e.target.value);

    e.target.value ? setError("") : setError("Field cannot be left empty !!");
  };

  return (
    <div style={{ maxWidth: "250px" }}>
      <TextBox
        value={value}
        error={error}
        onChange={onChangeFunc}
        label="Mobile"
        isRequired={true}
      />
    </div>
  );
}

withStore("Atoms/TextBox")
  .add("with error", () => <UITextBox1 />)
  .add("with label", () => <UITextBox2 />)
  .add("with placeholder", () => (
    <div style={{ maxWidth: "250px" }}>
      <TextBox placeholder="Mobile Number" />
    </div>
  ));
