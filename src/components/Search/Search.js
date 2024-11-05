import { Input } from "../Input/Input";
import "./Search.scss";

export function Search({ onSearch }) {
  return <Input onEnter={onSearch} />;
}
