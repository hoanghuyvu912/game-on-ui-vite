import React, { Fragment, useCallback, useEffect, useState } from "react";
import { fetchGameLibraryApi } from "src/services/game";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GameLibrary() {
  const [gameLibrary, setGameLibrary] = useState([]);

  const userInfo = useSelector((state) => state.authentication.userInfo);

  const navigate = useNavigate();

  const fetchGameLibrary = useCallback(async () => {
    const result = await fetchGameLibraryApi();

    setGameLibrary(result.data);
  }, []);

  console.log(gameLibrary);

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  useEffect(() => {
    fetchGameLibrary();
  }, [fetchGameLibrary]);

  const renderGameLibrary = gameLibrary.map((game, index) => {
    return (
      <div className="flex h-40 my-7 rounded-3xl bg-gray-500 px-4 py-3 text-black">
        <img
          src={game.thumbnail}
          className=" object-cover w-1/5 rounded-3xl mr-3"
          alt=""
        />
        <div className=" w-4/5">
          <h1 className="text-blue-700 font-bold text-3xl">{game.name}</h1>
          <p className="">Purchased date: {game.receiptDate}</p>
          <button
            className="mt-5 py-3 px-6 text-white bg-blue-700 rounded-2xl hover:bg-blue-500"
            onClick={() =>
              alert(
                "You're playing the game. Such wow. Much fun. Very immersion."
              )
            }
          >
            Play
          </button>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <p className="py-4 px-2 rounded-2xl bg-white text-blue-700 w-fit my-4 font-bold text-4xl">
        Your Game Library
      </p>
      {renderGameLibrary}
    </Fragment>
  );
}
