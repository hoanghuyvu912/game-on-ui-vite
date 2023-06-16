import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

export default function Home() {
  const [featuredGames, setFeaturedGames] = useState([]);

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

  const renderFeaturedGamesCarousel = featuredGames.map((game) => {
    return (
      <img
        key={game.id}
        alt="..."
        src={game.thumbnail}
        className="object-contain w-2/3 mx-auto 2xl:rounded-3xl sm:h-full"
      />
    );
  });

  return (
    <div className="w-11/12 mx-auto my-6 h-64 xl:h-96">
      <Carousel className="h-full">{renderFeaturedGamesCarousel}</Carousel>
    </div>
  );
}
