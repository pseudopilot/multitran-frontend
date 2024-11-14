import { Search } from "../../features/search/Search/Search";
import { Results } from "../../features/results/Results/Results";
import styles from "./MainLayout.module.scss";
import SearchProvider from "../../../context/SearchContext";

export function MainLayout() {
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
