import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllCatagories } from "../home/service/query/useGetAllCatagories";
import { Cart } from "../../assets/icons/cart";
import { loadState } from "../../services/storage";
import { Form } from "../../components/form";

export const SingleCategories = () => {
  const { datakey } = useParams();
  const { data } = useGetAllCatagories(datakey);
  const [isOpen, setIsOpen] = useState(false);
  const token = loadState("user");
  document.title = "Category " + datakey;
console.log(token);
  const localS = () => {
    if (!token) {
      setIsOpen(true);
    } else {
      console.log("qoshildi");
    }
  };
  return (
      <div className="grid grid-cols-4 gap-5 pt-10 p-5">
        {data?.map((item) => (
          <div className="shadow-md rounded-md p-2 text-center ">
            <Link key={item.id} to={`/product/${item.datakey}/${item.id}`}>
              <img className="w-[60%] mx-auto" src={item.img} alt="" />
              <h1>{item.title}</h1>
            </Link>
            <div className="flex justify-between items-center w-full  p-1 ">
              <strong className="text-xl">${item.price}</strong>
              <Form isOpen={isOpen} setIsOpen={setIsOpen} />
              <div
                onClick={localS}
                className="bg-yellow-400 p-2 cursor-pointer"
              >
                <Cart />
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};
