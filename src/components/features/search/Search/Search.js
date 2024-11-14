import { useState, useEffect } from "react";
import { Input } from "../../../common/atoms/Input/Input";
import { SearchOptions } from "../SearchOptions/SearchOptions";
import styles from "./Search.module.scss";
import {
  useSearchDispatch,
  useSearch,
} from "../../../../context/SearchContext";

export function Search() {
  const [query, setQuery] = useState("");
  const [lookupResults, setLookupResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { searchQuery, searchResults } = useSearch();
  const dispatch = useSearchDispatch();

  const keyDownHandler = (e) => {
    if (!["Escape", "Enter", "ArrowDown", "ArrowUp"].includes(e.key)) return;

    e.preventDefault();

    if (e.key === "Escape") {
      updateLookupResults([]);
    } else if (e.key === "Enter") {
      dispatch({
        type: "SET_SEARCH_QUERY",
        payload: lookupResults[selectedIndex] || query,
      });
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((si) => ((si + 2) % (lookupResults.length + 1)) - 1);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex(
        (si) =>
          ((si + lookupResults.length + 1) % (lookupResults.length + 1)) - 1
      );
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [lookupResults, selectedIndex]);

  useEffect(() => {
    setQuery(searchQuery);
    searchTranslation(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    updateLookupResults([]);
  }, [searchResults]);

  const onInputUpdate = async (v) => {
    setQuery(v);

    if (!v) {
      updateLookupResults([]);
    } else {
      const res = await lookup(v);
      updateLookupResults(res);
    }
  };

  const searchTranslation = async (v) => {
    const res = await search(v);
    dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: res,
    });
  };

  const updateLookupResults = (newResults) => {
    setSelectedIndex(-1);
    setLookupResults(newResults);
  };

  return (
    <div className={styles.wrapper}>
      <Input value={query} onChange={onInputUpdate} />
      <div className={styles.results}>
        <SearchOptions options={lookupResults} selectedIndex={selectedIndex} />
        <div className={styles.divider} />
      </div>
    </div>
  );
}

function lookup(v) {
  return fetch(`http://localhost:4000/lookup?text=${v}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
}

function search(v) {
  return fetch(`http://localhost:4000/search?text=${v}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });
}
