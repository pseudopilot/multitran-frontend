import styles from "./TranslationSubject.module.scss";

export function TranslationSubject({ subject }) {
  return (
    <>
      <div className={styles.subject}>{subject}</div>
    </>
  );
}
