import { createContext, useContext, useReducer } from "react";

const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

const SearchContext = createContext(null);
const SearchDispatchContext = createContext(null);

export const useSearch = () => useContext(SearchContext);
export const useSearchDispatch = () => useContext(SearchDispatchContext);

export default function SearchProvider({ children }) {
  const initialSearchState = {
    searchQuery: "",
    searchResults: [],
  };

  const [search, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <SearchContext.Provider value={search}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
