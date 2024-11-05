import styles from "./TranslationOption.module.scss";

export function TranslationOption({
  preContext,
  mainTranslation,
  afterContext,
}) {
  return (
    <span>
      <span className={styles.context}>{preContext}</span>{" "}
      <span>{mainTranslation}</span>{" "}
      <span className={styles.context}>{afterContext}</span>
    </span>
  );
}
