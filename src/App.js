import { useState } from "react";
import useMovieSearch from "./hooks/useMovieSearch";
import useNomination from "./hooks/useNomination";
import SearchBar from "./components/search-bar";
import SearchResults from "./components/search-results";
import Nominations from "./components/nominations";
import { ReactComponent as LoadingIcon } from "./assets/icons/loading.svg";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { nominations, addNomination, removeNomination } = useNomination();
  const { debouncedValue, loading, results, error } = useMovieSearch(
    searchTerm,
    1000
  );

  return (
    <>
      <div className="container wrapper">
        <header className="header">
          <h1>The Shoppies</h1>
          <h3>Movie awards for entrepreneurs</h3>
        </header>
        <main>
          <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
          {debouncedValue && (
            <header className="search-result-header">
              Showing all results for <strong>{debouncedValue}</strong>
            </header>
          )}

          <div className="main-container">
            {error && <div className="error-msg">{error}</div>}
            {loading ? (
              <div className="loading-icon">
                <LoadingIcon />
              </div>
            ) : (
              results.length > 0 && (
                <SearchResults data={results} addNomination={addNomination} />
              )
            )}
            <Nominations
              data={nominations}
              removeNomination={removeNomination}
            />
          </div>
        </main>
      </div>
      <footer className="footer">
        Made with ❤️ by{" "}
        <a
          href="https://www.soumitdas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soumit
        </a>
      </footer>
    </>
  );
};

export default App;
