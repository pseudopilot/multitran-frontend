import { useState } from "react";
import { Search } from "./components/Search/Search";
import { Results } from "./components/Results/Results";

export default function App() {
  const [results, setResults] = useState([]);

  const onSearch = (v) => {
    console.log("Searching...", v);
    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: v }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  };

  return (
    <div className="container">
      <Search onSearch={onSearch} />
      <Results results={results}>test</Results>
    </div>
  );
}
