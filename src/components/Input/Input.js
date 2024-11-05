import { useState } from "react";
import "./Input.module.scss";

export function Input({ onEnter }) {
  const [value, setValue] = useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnter(value);
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
}
