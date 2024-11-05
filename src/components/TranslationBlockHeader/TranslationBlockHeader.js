import styles from "./TranslationBlockHeader.module.scss";

export function TranslationBlockHeader({ term, transcript, part }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.term}>{term}</div>
        <div className={styles.details}>
          <span>{transcript}</span>
          <span className={styles.part}>{part}</span>
        </div>
      </div>
    </>
  );
}
