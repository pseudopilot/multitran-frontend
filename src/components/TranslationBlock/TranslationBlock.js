import { Fragment } from "react";
import { TranslationBlockHeader } from "../TranslationBlockHeader/TranslationBlockHeader";
import { TranslationSubject } from "../TranslationSubject/TranslationSubject";
import { TranslationOption } from "../TranslationOption/TranslationOption";
import styles from "./TranslationBlock.module.scss";

export function TranslationBlock({ translationBlock: tb, onSelect }) {
  return (
    <div className={styles.block}>
      <TranslationBlockHeader
        term={tb.term}
        transcript={tb.transcript}
        part={tb.part}
      />
      <div>
        {tb.results.map((t, i) => {
          return (
            <section key={i}>
              <TranslationSubject subject={t.subjects} />
              <div className={styles.translations}>
                {t.translations.map((t, j) => {
                  return (
                    <span key={j} onClick={() => onSelect(t.mainTranslation)}>
                      <TranslationOption
                        preContext={t.preContext}
                        mainTranslation={t.mainTranslation}
                        afterContext={t.afterContext}
                      />
                    </span>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
