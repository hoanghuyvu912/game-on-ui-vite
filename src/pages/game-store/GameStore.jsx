import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./GameStore.module.css";
import { fetchAllGamesApi } from "src/services/game";
import { LoadingContext } from "src/context/LoadingContext";

export default function GameStore() {
  const navigate = useNavigate();

  const [allGamesList, setAllGamesList] = useState([]);

  const [_, setLoadingState] = useContext(LoadingContext);

  const fetchAllGameList = useCallback(async () => {
    setLoadingState({ isLoading: true });

    const result = await fetchAllGamesApi();

    setLoadingState({ isLoading: false });

    setAllGamesList(result.data);
  }, []);

  useEffect(() => {
    fetchAllGameList();
  }, [fetchAllGameList]);

  console.log(allGamesList);

  const renderAllGamesCard = allGamesList.map((game) => {
    return (
      <div
        key={game.id}
        onClick={() => {
          navigate(`/game/${game.id}`);
        }}
        className={`${classes.card} h-96 bg-white mb-8 mr-8 rounded-2xl overflow-hidden text-black cursor-pointer`}
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
