import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function CartDetails() {
  const listOfGamesInCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(listOfGamesInCart);

  const renderGamesInCart = listOfGamesInCart.map((game) => {
    return (
      <li className="grid grid-cols-3 font-bold">
        <img
          src={game.thumbnail}
          alt=""
          className=" h-22 w-32 mb-5 rounded-xl"
        />
        <div>{game.name}</div>
        <div>${game.price}</div>
      </li>
    );
  });

  return (
    <Fragment>
      <h1 className="font-bold text-4xl text-white">Your cart details:</h1>
      <div className=" w-4/6">
        <ul>{renderGamesInCart}</ul>
        <div className="font-bold text-3xl justify-center grid grid-cols-3 ">
          <div className="col-start-2">Total Price:</div>
          <div className="col-start-3">${totalPrice}</div>
        </div>
      </div>
    </Fragment>
  );
}
