import { TranslationBlock } from "../TranslationBlock/TranslationBlock";
import styles from "./Results.module.scss";

export function Results({ results }) {
  return (
    <div class={styles.wrapper}>
      {(results?.length &&
        results.map((tb) => {
          return (
            <div className={styles.results}>
              <TranslationBlock translationBlock={tb}></TranslationBlock>
            </div>
          );
        })) || <p>No results found</p>}
    </div>
  );
}
