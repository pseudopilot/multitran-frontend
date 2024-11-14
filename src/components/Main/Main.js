import { useState } from "react";
import { Search } from "../Search/Search";
import { Results } from "../Results/Results";
import styles from "./Main.module.scss";
import SearchProvider from "../../context/SearchContext";

export function Main() {
  return (
    <SearchProvider>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.results}>
          <Results />
        </div>
      </div>
    </SearchProvider>
  );
}
