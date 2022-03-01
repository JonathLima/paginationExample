import { useState, useEffect } from "react";

import "./styles/App.css";

import Card from "./components/Card";
import { data } from "./services/api";

function App() {
  const [items] = useState(data);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(items.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = items.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <>
      <div className="button-container">
        <select
          value={itensPerPage}
          onChange={(e) => setItensPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>

        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
              className="btn-pages"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="app__container-cards">
        {currentItens.map((item) => (
          <Card name={item.name} />
        ))}
      </div>
    </>
  );
}

export default App;
