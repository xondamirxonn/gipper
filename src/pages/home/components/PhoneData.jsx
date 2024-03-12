import React, { useState } from "react";
import { Cart } from "../../../assets/icons/cart";
import { Heart } from "../../../assets/icons/heart";
import { loadState, saveState } from "../../../services/storage";
import { MyDialog } from "../../../components/login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../redux/reducer/product-reducer";
import {
  addQualifier,
  removeQualifier,
} from "../../../redux/reducer/qualifiers-reducer";

export const PhoneData = (props) => {
  const [like, setLike] = useState(false);
  const [change, setChange] = useState(false);

  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleLike = (id) => {
    if (!like) {
      dispatch(addQualifier(props));
    } else {
      dispatch(removeQualifier({ id }));
    }
  };

  const AddCart = () => {
    dispatch(add(props));
    setChange(true);
    saveState("change", change);
  };

  const SeeProduct = () => {
    navigate("/cart");
    setChange(false);
  };

  return (
    <div className="shadow-lg rounded-md  p- w-[95%] h-[65vh] flex items-center relative">
      <div className="flex items-start ">
        <Heart
          className={`absolute right-3 top-4 ${like ? "bg-black" : ""}`}
          onClick={() => toggleLike(props.id)}
        />
      </div>
      <Link to={`/product/${props.datakey}/${props.id}`} className="mx-auto">
        <img src={props.img} alt="" />
        <h1 className="text-center mt-3">{props.title}</h1>
      </Link>
      <div className="flex justify-between items-center w-full absolute bottom-2 right-0 p-1 ">
        <strong className="text-xl">${props.price}</strong>
        {!change ? (
          <div onClick={AddCart} className="bg-yellow-400 p-2 cursor-pointer">
            <Cart />
          </div>
        ) : (
          <div onClick={SeeProduct} className="bg-red-400 p-2 cursor-pointer">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
};
