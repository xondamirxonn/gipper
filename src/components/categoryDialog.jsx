import React from "react";
import { CategoryModal } from "./categoryModal";
import { useGetCatagries } from './../pages/home/service/query/useGetCategory';
import { Link } from "react-router-dom";

export const CategoryDialog = ({categoryOpen, setCategoryOpen}) => {

  const {data, isLoading} = useGetCatagries()
  return (
    <div className="">
      <CategoryModal
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
      >
        <div className="grid grid-cols-3 justify-betwen gap-10  p-5 items-center">
          {data?.map((item) => (
            <Link key={item.id} to={`catagories/${item.datakey}` } onClick={() => setCategoryOpen(false)}   className="mx-auto flex items-center gap-5 bg-gray-200 p-4 h-[20vh] text-center w-[100%]">
              <img className="w-[100px]" src={item.img} alt="" />
              <h1>{item.title}</h1>
            </Link>
          ))}
        </div>
      </CategoryModal>
    </div>
  );
};
