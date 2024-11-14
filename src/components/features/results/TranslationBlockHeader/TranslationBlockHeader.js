import styles from "./TranslationBlockHeader.module.scss";

export function TranslationBlockHeader({ term, transcript, part }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <span className={styles.term}>{term}</span>
          <span className={styles.transcript}>{transcript}</span>
        </div>
        {part && <div className={styles.part}>{part}</div>}
      </div>
    </>
  );
}
