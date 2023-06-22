import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "src/store/cart-slice";

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
        <li key={comment.id} className="my-5">
          <p className="font-bold text-lg italic">{comment.username}</p>
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

  return (
    <section className="my-6">
      <div className="grid grid-cols-2 gap-24 justify-between flex-wrap">
        <div className="h-[450px]">
          <img
            src={gameDetails?.thumbnail}
            alt=""
            className="object-fill h-full w-full rounded-3xl"
          />
        </div>
        <div className="h-[500px] leading-10">
          <h1 className="font-bold text-6xl">{gameDetails?.name}</h1>
          <p>
            Released date: <span>{gameDetails?.releasedDate}</span>
          </p>
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
            className="px-6 py-2 border-solid border-2 border-whites rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-150"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="mt-8">
        <ul>{renderGameComment}</ul>
      </div>
    </section>
  );
}
