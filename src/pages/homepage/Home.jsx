import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { fetchFeaturedGamesApi } from "src/services/game";
import "./Home.css";
import { LoadingContext } from "src/context/LoadingContext";

export default function Home() {
  const navigate = useNavigate();
  const [_, setLoadingState] = useContext(LoadingContext);

  const [featuredGames, setFeaturedGames] = useState([]);

  const fetchFeaturedGamesList = useCallback(async () => {
    try {
      setLoadingState({ isLoading: true });

      const response = await fetchFeaturedGamesApi();

      setLoadingState({ isLoading: false });

      setFeaturedGames(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchFeaturedGamesList();
  }, [fetchFeaturedGamesList]);

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

  // const renderBestSellerGamesCarousel = bestSellerGames.map((item, index) => {
  //   return (
  //     <img
  //       key={item.simplifiedGameDto.id}
  //       alt="..."
  //       src={item.simplifiedGameDto.thumbnail}
  //       className="w-full mx-auto rounded-2xl h-full object-cover"
  //       onClick={() => navigate(`/game/${game.id}`)}
  //     />
  //   );
  // });

  // const renderWorstSellerGamesCarousel = worstSellerGames.map((item, index) => {
  //   return (
  //     <img
  //       key={item.simplifiedGameDto.id}
  //       alt="..."
  //       src={item.simplifiedGameDto.thumbnail}
  //       className="w-full mx-auto rounded-2xl h-full object-cover"
  //       onClick={() => navigate(`/game/${game.id}`)}
  //     />
  //   );
  // });

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
