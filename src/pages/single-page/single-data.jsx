import React from "react";
import { useParams } from "react-router-dom";
import { useGetPhone } from "../home/service/query/useGetPhone";
import { useGetSingleData } from "../home/service/query/useGetSingleData";
import { Heart } from "../../assets/icons/heart";
import { useDispatch } from "react-redux";
import { addQualifier } from "../../redux/reducer/qualifiers-reducer";
import { add } from "../../redux/reducer/product-reducer";

export const SingleData = () => {
  const { id, datakey } = useParams();
  const { data } = useGetSingleData(datakey, id);
 const dispatch = useDispatch()
  const addQualifiers = (data) =>{
    dispatch(addQualifier(data))
  }

  const addCart = (data) => {
    dispatch(add(data))
  }

  // console.log(tel);
  return (
    <div className="p-8 pt-10">
      {data ? (
        <div className="flex">
          <div className="w-[70%]">
            <h1 className="text-2xl font-medium">{data?.title}</h1>
            <button
              className="flex items-center gap-2 mt-2"
              onClick={() => addQualifiers(data)}
            >
              <Heart /> В избранное
            </button>
            <img className="h-[50vh]" src={data?.img} alt="" />
          </div>

          <div className="bg-gray-100 shadow-lg rounded-md w-[30%] h-[20vh] relative">
            <strong className="text-4xl left-10 absolute top-10">${data?.price}</strong>
            <button onClick={() => addCart(data)} className="p-2 rounded-b-md bg-yellow-400 w-[100%] absolute bottom-0 right-0">В корзину</button>
          </div>
        </div>
      ) : (
        <h1>malumot topilmadi</h1>
      )}
    </div>
  );
};
