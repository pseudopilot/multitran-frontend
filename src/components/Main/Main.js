import { useState } from "react";
import { Search } from "../Search/Search";
import { Results } from "../Results/Results";
import styles from "./Main.module.scss";

export function Main() {
  const [results, setResults] = useState([]);

  const onSearch = async (v) => {
    const res = await search(v);
    setResults(res);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Search onSearch={onSearch} />
      </div>
      <div className={styles.results}>
        <Results results={results} onSelect={onSearch} />
      </div>
    </div>
  );
}

function search(v) {
  return fetch(`http://localhost:4000/search?text=${v}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
}
