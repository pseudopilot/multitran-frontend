import "./Input.module.scss";

export function Input({ onChange }) {
  const updateValue = (v) => {
    onChange(v);
  };

  return <input onChange={(e) => updateValue(e.target.value)} />;
}
