import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./GameStore.module.css";
import { fetchAllGamesApi } from "src/services/game";

export default function GameStore() {
  const [allGamesList, setAllGamesList] = useState([]);

  const navigate = useNavigate();

  // const fetchAllGameList = useCallback(async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/api/games/`);
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();
  //     setAllGamesList(data);
  //   } catch (error) {}
  // }, []);

  const fetchAllGameList = useCallback(async () => {
    const result = await fetchAllGamesApi();

    setAllGamesList(result.data);
  }, []);

  useEffect(() => {
    fetchAllGameList();
  }, [fetchAllGameList]);

  const renderAllGamesCard = allGamesList.map((game) => {
    return (
      <div
        key={game.id}
        onClick={() => {
          navigate(`/game/${game.id}`);
        }}
        className={`${classes.card} h-96 bg-white mb-8 mr-8 rounded-2xl overflow-hidden text-black  cursor-pointer`}
      >
        <img
          src={game.thumbnail}
          alt=""
          className="object-cover w-full h-4/5 justify-center"
        />
        <div className="p-4">
          <h1 className="font-bold">{game.name}</h1>
          <p>Price: ${game.price}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 my-8">
      {renderAllGamesCard}
    </div>
  );
}
