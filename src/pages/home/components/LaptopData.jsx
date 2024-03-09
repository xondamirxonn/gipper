import React, { useState } from "react";
import { Heart } from "../../../assets/icons/heart";
import { Cart } from "../../../assets/icons/cart";
import { loadState } from "../../../services/storage";
import { Form } from "../../../components/form";
import { Link } from "react-router-dom";

export const LaptopData = (props) => {
  const [like, setLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const token = loadState("user")

  const localS = () => {
    if(!token) {
      setIsOpen(!isOpen)
    }else{ 
      console.log("qoshildi");
    }
  }
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className="shadow-lg rounded-md  p-5 w-[95%] h-[65vh] flex items-center relative">
      <Link to={`/product/${props.datakey}/${props.id}`} className="">
        <div className="flex items-start ">
          <Heart
            className={`absolute right-3 top-4 ${like ? "bg-black" : ""}`}
            onClick={toggleLike}
          />
          <img src={props.img} alt="" />
        </div>
        <h1 className="text-center">{props.title}</h1>
      </Link>
        <div className="flex justify-between items-center w-full absolute bottom-2 right-0 p-1 ">
          <strong className="text-xl">${props.price}</strong>
          <div onClick={localS} className="bg-yellow-400 p-2 cursor-pointer">
            <Cart />
          <Form isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
    </div>
  );
};
