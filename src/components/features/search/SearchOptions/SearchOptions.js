import { useSearchDispatch } from "../../../../context/SearchContext";
import styles from "./SearchOptions.module.scss";

export function SearchOptions({ options, selectedIndex }) {
  const dispatch = useSearchDispatch();

  return (
    <>
      {options?.length > 0 && (
        <ul className={styles.results}>
          {options.map((option, i) => (
            <li
              className={i == selectedIndex ? styles.selected : ""}
              key={i}
              onClick={() =>
                dispatch({
                  type: "SET_SEARCH_QUERY",
                  payload: option,
                })
              }
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
