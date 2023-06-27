import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "src/store/cart-slice";
import { Carousel } from "flowbite-react";
import { Rating } from "flowbite-react";
import { fetchGameDetailsApi } from "src/services/game";
import { LoadingContext } from "src/context/LoadingContext";

export default function Game() {
  const dispatch = useDispatch();

  const [gameDetails, setGameDetails] = useState();

  const [_, setLoadingState] = useContext(LoadingContext);

  const params = useParams();

  const fetchGameDetails = useCallback(async () => {
    setLoadingState({ isLoading: true });

    const result = await fetchGameDetailsApi(params.gameId);

    setLoadingState({ isLoading: false });

    setGameDetails(result.data);
  }, []);

  useEffect(() => {
    fetchGameDetails();
  }, [fetchGameDetails]);

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
        <textarea
          name=""
          id=""
          rows="4"
          onChange={(event) => console.log(event.target.value)}
          className="w-full rounded-2xl text-black mt-3"
          placeholder="Leave a comment"
        ></textarea>

        <ul>{renderGameComment}</ul>
      </div>
    </section>
  );
}
