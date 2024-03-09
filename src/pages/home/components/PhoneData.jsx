import React, { useState } from "react";
import { Cart } from "../../../assets/icons/cart";
import { Heart } from "../../../assets/icons/heart";
import { loadState } from "../../../services/storage";
import { MyDialog } from "../../../components/login";
import { Form } from "../../../components/form";

export const PhoneData = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [like, setLike] = useState(false);
  const token = loadState("user");

  const toggleLike = () => {
    setLike(!like);
  };

  const localS = () => {
    if (!token) {
      setIsOpen(!isOpen)
    } else {
      console.log("qoshildi");
    }
  };
  const priceInSoM = (props.price * 12500).toString();
  const parts = priceInSoM.split(".");

  return (
    <div className="shadow-lg rounded-md  p- w-[95%] h-[65vh] flex items-center relative">
      <div className="">
        <div className="flex items-start ">
          <Heart
            className={`absolute right-3 top-4 ${like ? "bg-black" : ""}`}
            onClick={toggleLike}
          />
          <img src={props.img} alt="" />
        </div>
        <h1 className="text-center">{props.title}</h1>
        <div className="flex justify-between items-center w-full absolute bottom-2 right-0 p-1 ">
          <strong className="text-xl">{parts} so'm</strong>
          <div onClick={localS} className="bg-yellow-400 p-2 cursor-pointer">
            <Cart />
          </div>
          <Form isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};
