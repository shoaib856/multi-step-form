import { useState } from "react";

export default function InputField({ label, placeholder, type }) {
  const [value, setValue] = useState(sessionStorage.getItem(label) ?? "");
  const [showMsg, setShowMsg] = useState(false);
  const setFields = (field, value) => {
    sessionStorage.setItem(field, value);
  };
  const handleInput = (e) => {
    setValue(e.target.value);
    setShowMsg(false);
    if (label === "Phone Number") {
      e.target.maxLength = 11;
      const result = e.target.value.replace(/\D/g, "");
      setValue(result);
    }
    setFields(label, e.target.value);
  };
  const handleBlur = (e) => {
    setShowMsg(value === "" ? true : false);
    e.target.style.borderColor =
      value === "" ? "var(--Strawberry-red)" : "var(--Light-gray)";
  };
  const handleFocus = (e) => {
    e.target.style.borderColor = "var(--Purplish-blue)";
  };
  return (
    <div className="field">
      <label htmlFor={label.split(" ")[0]} className="input-label">
        {label}
        <ErrorMessage display={showMsg ? "block" : "none"} />
      </label>
      <input
        type={type}
        id={label.split(" ")[0]}
        value={value}
        onInput={handleInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        className="input-field w-100"
      />
    </div>
  );
}

function ErrorMessage(props) {
  return (
    <span className="error-msg" style={{ display: props.display }}>
      This field is required
    </span>
  );
}
