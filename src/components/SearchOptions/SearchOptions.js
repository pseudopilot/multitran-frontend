import styles from "./SearchOptions.module.scss";

export function SearchOptions({ options, selectedIndex }) {
  return (
    <>
      {options?.length > 0 && (
        <ul className={styles.results}>
          {options.map((option, i) => (
            <li className={i == selectedIndex ? styles.selected : ""} key={i}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
