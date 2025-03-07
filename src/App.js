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
    console.log("this is the page " + page);
    let res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    console.log("This is the res" + res);
    let data = await res.json();
    console.log(data);
    setCharacters(data.results);
    console.log("This is the data" + data.results);
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
