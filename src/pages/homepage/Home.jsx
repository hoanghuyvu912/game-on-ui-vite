import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import {
  fetchFeaturedGamesApi,
  fetchRecentBestSellerGamesApi,
  fetchRecentWorstSellerGamesApi,
} from "src/services/game";
import "./Home.css";

export default function Home() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [bestSellerGames, setBestSellerGames] = useState([]);
  const [worstSellerGames, setWorstSellerGames] = useState([]);

  const navigate = useNavigate();

  const fetchFeaturedGamesList = useCallback(async () => {
    try {
      const response = await fetchFeaturedGamesApi();
      setFeaturedGames(response.data);
    } catch (error) {}
  }, []);

  const fetchRecentBestSellerGamesList = useCallback(async () => {
    try {
      const response = await fetchRecentBestSellerGamesApi();
      setBestSellerGames(response.data);
    } catch (error) {}
  }, []);

  const fetchRecentWorstSellerGamesList = useCallback(async () => {
    try {
      const response = await fetchRecentWorstSellerGamesApi();
      setWorstSellerGames(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchFeaturedGamesList();
  }, [fetchFeaturedGamesList]);

  useEffect(() => {
    fetchRecentBestSellerGamesList();
  }, [fetchRecentBestSellerGamesList]);

  useEffect(() => {
    fetchRecentWorstSellerGamesList();
  }, [fetchRecentWorstSellerGamesList]);

  const renderFeaturedGamesCarousel = featuredGames.map((game, index) => {
    return (
      <img
        key={game.id}
        alt="..."
        src={game.thumbnail}
        className="w-full mx-auto rounded-3xl h-full object-cover"
        onClick={() => navigate(`/game/${game.id}`)}
      />
    );
  });

  const renderBestSellerGamesCarousel = bestSellerGames.map((item, index) => {
    return (
      <img
        key={item.simplifiedGameDto.id}
        alt="..."
        src={item.simplifiedGameDto.thumbnail}
        className="w-full mx-auto rounded-2xl h-full object-cover"
        onClick={() => navigate(`/game/${game.id}`)}
      />
    );
  });

  const renderWorstSellerGamesCarousel = worstSellerGames.map((item, index) => {
    return (
      <img
        key={item.simplifiedGameDto.id}
        alt="..."
        src={item.simplifiedGameDto.thumbnail}
        className="w-full mx-auto rounded-2xl h-full object-cover"
        onClick={() => navigate(`/game/${game.id}`)}
      />
    );
  });

  return (
    <div className="mx-auto my-6 h-fit w-5/6 flex flex-col items-center">
      <div
        // id="newly-released"
        className={`text-5xl font-bold my-5 rounded-xl text-center h-1/10 newly-released w-fit px-7 py-3 relative flex justify-center items-center overflow-hidden bg-black`}
      >
        <span></span>
        <h1>Newly Released:</h1>
      </div>
      <Carousel className="xl:h-[650px]">
        {renderFeaturedGamesCarousel}
      </Carousel>
      {/* <div className="w-full grid grid-cols-2 xl:h-[350px]">
        <Carousel>{renderBestSellerGamesCarousel}</Carousel>
        <Carousel>{renderWorstSellerGamesCarousel}</Carousel>
      </div> */}
    </div>
  );
}
