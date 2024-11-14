import { TranslationBlock } from "../TranslationBlock/TranslationBlock";
import styles from "./Results.module.scss";
import { useSearch } from "../../../../context/SearchContext";

export function Results() {
  const { searchResults } = useSearch();

  return (
    <div className={styles.wrapper}>
      {(searchResults?.length &&
        searchResults.map((tb, i) => {
          return <TranslationBlock key={i} translationBlock={tb} />;
        })) || <p className={styles.empty}>No results found</p>}
    </div>
  );
}
