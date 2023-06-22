import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { fetchGameLibraryApi } from "src/services/game";

export default function GameLibrary() {
  const [gameLibrary, setGameLibrary] = useState([]);

  const fetchGameLibrary = useCallback(async () => {
    const result = await fetchGameLibraryApi();
    console.log(result);

    setGameLibrary(result.data);
  }, []);

  console.log(gameLibrary);

  useEffect(() => {
    fetchGameLibrary();
  }, [fetchGameLibrary]);

  const renderGameLibrary = gameLibrary.map((game,index) => {
    return (
      <div key={index+1}>
        <h1>Game Name: {game.gameName}</h1>
        <p>Game price: {game.gamePrice}</p>
        <p>Date: {game.receiptDate}</p>
      </div>
    );
  });

  return <div>{renderGameLibrary}</div>;
}
