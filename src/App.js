import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import CardDetail from "./components/CardDetail";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = async (page) => {
    let res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    let data = await res.json();
    setCharacters(data.results);
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <div className="main-container ">
        <div className>
          <div>
            <Cards characters={characters} />
            <button onClick={handleBack} disabled={page === 1}>
              Back
            </button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
