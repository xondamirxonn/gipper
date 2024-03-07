import React, { useState } from 'react'
import { Cart } from '../../../assets/icons/cart';
import { Heart } from '../../../assets/icons/heart';

export const PhoneData = (props) => {
const [like, setLike] = useState(false)

const toggleLike = () => {
  setLike(!like)
}
  
  return (
    <div className="border border-black  p-5 w-[95%] h-[50vh] flex items-center relative">
      <div className="">
        <div className='flex items-start '>
          <Heart className={`absolute right-3 top-4 ${like ? "bg-black" : ""}`} onClick={toggleLike}/>
          <img  src={props.img} alt="" />
        </div>
        <h1 className="text-center">{props.title}</h1>
        <div className="flex justify-between items-center w-full absolute bottom-0 right-0 p-1">
          <strong className="text-xl">${props.price}</strong>
          <div className="bg-yellow-400 p-2 cursor-pointer">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
