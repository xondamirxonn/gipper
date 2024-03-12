import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetAll } from "./components/getAll";
import { useNavigate } from "react-router-dom";

export const Qualifiers = () => {
  const { qualifiers } = useSelector((state) => state.qualifier);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const HomePage = () => {
    navigate("/");
  };
  return (
    <div className="min-h-[37.9vh]">
      {!qualifiers.length ? (
        <div>
          <div className="text-center mt-10 flex flex-col gap-3">
            <h1 className="text-4xl font-bold  ">
              Saralaganlarda hozircha mahsulot yoʻq
            </h1>
            <p>
              Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni
              qidiruv orqali toping
            </p>
            <button
              onClick={HomePage}
              className="bg-yellow-400 p-2 rounded-md  mx-auto w-[15%]"
            >
              Bosh sahifa
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 p-10 gap-5 pb-10">
          {qualifiers?.map((item) => (
            <GetAll key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
