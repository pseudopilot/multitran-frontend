import { TranslationBlock } from "../TranslationBlock/TranslationBlock";
import styles from "./Results.module.scss";

export function Results({ results, onSelect }) {
  return (
    <div className={styles.wrapper}>
      {(results?.length &&
        results.map((tb, i) => {
          return (
            <TranslationBlock
              key={i}
              translationBlock={tb}
              onSelect={onSelect}
            />
          );
        })) || <p className={styles.empty}>No results found</p>}
    </div>
  );
}
