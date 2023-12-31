import React, { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconTrashFilled } from "@tabler/icons-react";
import { cartActions } from "src/store/cart-slice";
import { checkout } from "src/services/receipt";
import { useNavigate } from "react-router-dom";
import classes from "./CartDetails.module.css";

export default function CartDetails() {
  const navigate = useNavigate();
  const listOfGamesInCart = useSelector((state) => state.cart.items);
  let totalPrice = useSelector((state) => state.cart.totalPrice).toFixed(2);
  const userInfo = useSelector((state) => state.authentication.userInfo);
  const dispatch = useDispatch();

  const handleCheckout = useCallback(async () => {
    const cartDetails = {
      userId: userInfo.id,
      gameIdList: listOfGamesInCart.map((game) => game.id),
    };

    try {
      const response = await checkout(cartDetails);
      console.log(response);

      if (response.status === 200) {
        alert("Thank you for purchasing!");
        dispatch(cartActions.clearCart());
        navigate("/store");
      }
    } catch (error) {}
  }, []);

  const renderGamesInCart = listOfGamesInCart.map((game) => {
    return (
      <li key={game.id} className="grid grid-cols-4 font-bold">
        <img
          src={game.thumbnail}
          alt=""
          className=" h-22 w-32 mb-5 rounded-xl"
        />
        <div>{game.name}</div>
        <div className="text-right">${game.price}</div>
        {/* <div></div> */}
        <IconTrashFilled
          className="ml-6 cursor-pointer transition-all duration-150 hover:text-blue-400 hover:scale-125"
          onClick={() => {
            dispatch(cartActions.removeItemFromCart(game.id));
          }}
        />
      </li>
    );
  });

  return (
    <Fragment>
      {listOfGamesInCart == 0 ? (
        <div className="w-4/5 m-auto bg-white text-black items-center text-center p-32 rounded-2xl my-4 text-7xl font-bold">
          <p className={`py-5 ${classes["cart-empty-text"]}`}>
            Your cart is empty.
          </p>
          <p className={`py-5  ${classes["cart-empty-text"]}`}>
            {" "}
            Go buy some games!
          </p>
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-4xl text-white my-6">
            Your cart details:
          </h1>
          <div className="w-4/6">
            <ul className="text-xl">{renderGamesInCart}</ul>
            <div className="font-bold text-4xl justify-center grid grid-cols-4 ">
              <div className="col-start-2">Total Price:</div>
              <div className="text-right col-start-3">${totalPrice}</div>
              <div
                onClick={handleCheckout}
                className="col-start-3 my-5 py-3 px-6 text-5xl border-solid border-4 border-white rounded-3xl justify-center items-center cursor-pointer transition-all duration-150 hover:bg-white hover:text-blue-700 w-fit"
              >
                Checkout
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
