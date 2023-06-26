import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "src/store/cart-slice";
import { Carousel } from "flowbite-react";
import { Rating } from "flowbite-react";

export default function Game() {
  const dispatch = useDispatch();

  const [gameDetails, setGameDetails] = useState();

  const params = useParams();

  const fetchGameDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/games/${params.gameId}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setGameDetails(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchGameDetails();
  }, [fetchGameDetails]);

  console.log(gameDetails);

  const renderGameComment = gameDetails?.simplifiedCommentDtoList.map(
    (comment, index) => {
      return (
        <li
          key={comment.id}
          className="my-5 px-7 py-4  bg-gray-700 bg-opacity-60 rounded-2xl"
        >
          <p className="font-bold text-xl italic">{comment.username}</p>
          <p>{comment.commentDate}</p>
          <p>{comment.commentContent}</p>
        </li>
      );
    }
  );

  const renderGameSystemReq = gameDetails?.systemReq
    .split("\n")
    .map((str, index) => {
      return (
        <p key={index} className="leading-none">
          {str}
        </p>
      );
    });

  const renderGameImages = gameDetails?.simplifiedGameImageDtoList.map(
    (image) => {
      return <img key={image.id} alt="..." src={image.imageLink} />;
    }
  );

  const genreString = gameDetails?.simplifiedGameGenreDtoList
    .map((ele) => {
      return ele.genreName;
    })
    .join(", ");

  const subGenreString = gameDetails?.simplifiedGameSubGenreDtoList
    .map((ele) => {
      return ele.subGenreName;
    })
    .join(", ");

  const avgRating =
    gameDetails?.simplifiedRatingDtoList.reduce(
      (totalRating, currentRating) => {
        return totalRating + currentRating.rating;
      },
      0
    ) / gameDetails?.simplifiedRatingDtoList.length;

  return (
      <section className="my-6">
        <div className="grid grid-cols-2 gap-24 justify-between flex-wrap">
          <div className="h-[450px]">
            <iframe
              className="w-full h-full m-auto rounded-3xl my-0"
              src={gameDetails?.trailer}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" h-fit leading-10">
            <h1 className="font-bold text-6xl">{gameDetails?.name}</h1>
            <p className=" italic">
              Released date: <span>{gameDetails?.releasedDate}</span>
            </p>
            <p>
              <span className=" font-bold">Genre:</span>{" "}
              {genreString + ", " + subGenreString}
            </p>
            <Rating>
              <p className="font-bold dark:text-gray-400 mr-1">Rating:</p>
              <Rating.Star />
              <p className="ml-1 font-bold dark:text-gray-400">{avgRating}</p>
            </Rating>
            <p className="font-bold">{gameDetails?.description}</p>
            <p className="font-bold underline">System requirement:</p>
            {renderGameSystemReq}
            <p>
              Price: <span className="font-bold">${gameDetails?.price}</span>
            </p>
            <button
              onClick={() =>
                dispatch(
                  cartActions.addItemToCart({
                    id: gameDetails.id,
                    name: gameDetails.name,
                    price: gameDetails.price,
                    thumbnail: gameDetails.thumbnail,
                  })
                )
              }
              className="px-6 py-2 border-solid border-2 border-whites text-2xl font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-150"
            >
              Add to cart
            </button>
          </div>
        </div>
        <Carousel className="h-[900px] my-8" slideInterval={4000}>
          {renderGameImages}
        </Carousel>
        <div className="mt-8">
          <h1 className="font-bolder text-5xl">Comments: </h1>
          <ul>{renderGameComment}</ul>
        </div>
      </section>
  );
}
