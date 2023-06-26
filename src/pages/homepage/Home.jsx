import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import {
  fetchFeaturedGamesApi,
  fetchRecentBestSellerGamesApi,
  fetchRecentWorstSellerGamesApi,
} from "src/services/game";
import Slider from "react-slick";

export default function Home() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [bestSellerGames, setBestSellerGames] = useState([]);
  const [worstSellerGames, setWorstSellerGames] = useState([]);

  const navigate = useNavigate();

  // const fetchFeaturedGamesListHandler = useCallback(async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/games/featured");
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();

  //     const transformedGames = data.map((gameData) => {
  //       return {
  //         id: gameData.id,
  //         name: gameData.name,
  //         description: gameData.description,
  //         releaseDate: gameData.releaseDate,
  //         price: gameData.price,
  //         thumbnail: gameData.thumbnail,
  //       };
  //     });
  //     setFeaturedGames(transformedGames);
  //   } catch (error) {}
  // }, []);

  const fetchFeaturedGamesList = useCallback(async () => {
    try {
      const response = await fetchFeaturedGamesApi();
      console.log(response);
      setFeaturedGames(response.data);
    } catch (error) {}
  }, []);

  const fetchRecentBestSellerGamesList = useCallback(async () => {
    try {
      const response = await fetchRecentBestSellerGamesApi();
      console.log(response);
      setBestSellerGames(response.data);
    } catch (error) {}
  }, []);

  const fetchRecentWorstSellerGamesList = useCallback(async () => {
    try {
      const response = await fetchRecentWorstSellerGamesApi();
      console.log(response);
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
  // useEffect(() => {
  //   fetchFeaturedGamesListHandler();
  // }, [fetchFeaturedGamesListHandler]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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
    <div className="mx-auto my-6 h-fit w-5/6">
      <h1 className="text-5xl font-bold my-5 text-center h-1/10">Newly Released: </h1>
      <Carousel className="xl:h-[650px]">{renderFeaturedGamesCarousel}</Carousel>
      {/* <div className="w-full grid grid-cols-2 xl:h-[350px]">
        <Carousel>{renderBestSellerGamesCarousel}</Carousel>
        <Carousel>{renderWorstSellerGamesCarousel}</Carousel>
      </div> */}
    </div>
  );
}
