import React, { useState } from "react";
import { Heart } from "../../../assets/icons/heart";
import { Cart } from "../../../assets/icons/cart";
import { loadState, saveState } from "../../../services/storage";
import { Form } from "../../../components/form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/reducer/product-reducer";
import {
  addQualifier,
  removeQualifier,
} from "../../../redux/reducer/qualifiers-reducer";

export const LaptopData = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  const AddCart = () => {
    dispatch(add(props));
  };

  const toggleLike = (id) => {
    if (!like) {
      dispatch(addQualifier(props));
    } else {
      dispatch(removeQualifier({ id }));
    }
  };

  return (
    <div className="shadow-lg rounded-md  p-5 w-[95%] h-[65vh] flex items-center relative">
      <div className="flex items-start ">
        <Heart
          className={`absolute right-3 top-4 ${like ? "bg-red-500 " : ""}`}
          onClick={() => toggleLike(props.id)}
        />
      </div>
      <Link to={`/product/${props.datakey}/${props.id}`} className="">
        <img src={props.img} alt="" />
        <h1 className="text-center">{props.title}</h1>
      </Link>
      <div className="flex justify-between items-center w-full absolute bottom-2 right-0 p-1 ">
        <strong className="text-xl">${props.price}</strong>
        <div onClick={AddCart} className="bg-yellow-400 p-2 cursor-pointer">
          <Cart />
        </div>
      </div>
    </div>
  );
};
