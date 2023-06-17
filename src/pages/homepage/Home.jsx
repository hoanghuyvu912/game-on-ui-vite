"use client";

import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [featuredGames, setFeaturedGames] = useState([]);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const fetchFeaturedGamesListHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/api/games/featured");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedGames = data.map((gameData) => {
        return {
          id: gameData.id,
          name: gameData.name,
          description: gameData.description,
          releaseDate: gameData.releaseDate,
          price: gameData.price,
          thumbnail: gameData.thumbnail,
        };
      });
      setFeaturedGames(transformedGames);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchFeaturedGamesListHandler();
  }, [fetchFeaturedGamesListHandler]);

  const renderFeaturedGamesCarousel = featuredGames.map((game, index) => {
    return (
      <img
        key={game.id}
        alt="..."
        src={game.thumbnail}
        className="object-contain w-2/3 mx-auto rounded-[24px] sm:h-full"
        onClick={() => handleNavigate(`/game/${game.id}`)}
      />
    );
  });

  return (
    <div className="mx-auto my-6 h-64 xl:h-96">
      <Carousel slide className="h-full">
        {renderFeaturedGamesCarousel}
      </Carousel>
    </div>
  );
}
