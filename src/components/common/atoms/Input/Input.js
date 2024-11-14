import { useState, useEffect } from "react";
import "./Input.module.scss";

export function Input({ value, onChange }) {
  const [inputValue, setInputValue] = useState("");

  let emitValue = true;

  useEffect(() => {
    if (value !== inputValue) {
      emitValue = false;
      setInputValue(value);
    }
  }, [value]);

  const updateValue = (v) => {
    if (v === value) return;

    setInputValue(v);

    if (emitValue) {
      onChange(v);
    } else {
      emitValue = true;
    }
  };

  return (
    <input value={inputValue} onChange={(e) => updateValue(e.target.value)} />
  );
}
