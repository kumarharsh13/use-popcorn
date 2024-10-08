import { useRef } from "react";
import { useKey } from "../hooks/useKey";

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement !== inputEl.current) {
      inputEl.current.focus();
      setQuery("");
    }
  });

  return (
    <input
      ref={inputEl}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;