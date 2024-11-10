import { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import { SearchOptions } from "../SearchOptions/SearchOptions";
import styles from "./Search.module.scss";

export function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [lookupResults, setLookupResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setLookupResults([]);
    } else if (e.key === "Enter") {
      e.preventDefault();
      onSelect(lookupResults[selectedIndex] || query);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((si) => ((si + 2) % (lookupResults.length + 1)) - 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (si) =>
          ((si + lookupResults.length + 1) % (lookupResults.length + 1)) - 1
      );
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [lookupResults, selectedIndex]);

  const onSelect = (v) => {
    setSelectedIndex(-1);
    setLookupResults([]);
    onSearch(v);
  };

  const onChange = async (v) => {
    setQuery(v);
    setSelectedIndex(-1);

    if (!v) {
      setLookupResults([]);
    } else {
      const res = await lookup(v);
      setLookupResults(res);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Input onChange={onChange} />
      <div className={styles.results}>
        <SearchOptions options={lookupResults} selectedIndex={selectedIndex} />
        <div className={styles.divider} />
      </div>
    </div>
  );
}

function lookup(v) {
  return fetch(`http://localhost:4000/lookup?text=${v}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
}
