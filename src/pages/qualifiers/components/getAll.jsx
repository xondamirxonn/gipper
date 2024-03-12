import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadState } from "../../../services/storage";
import { Heart } from "../../../assets/icons/heart";
import { add } from "../../../redux/reducer/product-reducer";
import {  removeQualifier } from "../../../redux/reducer/qualifiers-reducer";
import { Cart } from "./../../../assets/icons/cart";
import { Link } from "react-router-dom";

export const GetAll = (prop) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const AddCart = () => {
    dispatch(add(prop));
  };
  const removeCart = (id) => {
    dispatch(removeQualifier({ id }));
  };
  return (
    <div className="shadow-lg rounded-md  p-5 w-[%] h-[65vh] flex items-center relative">
          <Heart
            className={`absolute right-3 top-4 bg-red-400`}
            onClick={() => removeCart(prop.id)}
          />
      <Link to={`/product/${prop.datakey}/${prop.id}`} className=" mx-auto">
        <div className="flex items-start ">
          <div className="">
            <img src={prop.img} alt="" />
            <h1 className="text-center">{prop.title}</h1>
          </div>
        </div>
      </Link>
        <div className="flex justify-between items-center w-full absolute bottom-2 right-0 p-1 ">
          <strong className="text-xl">${prop.price}</strong>
          <div onClick={AddCart} className="bg-yellow-400 p-2 cursor-pointer">
            <Cart />
          </div>
        </div>
    </div>
  );
};
