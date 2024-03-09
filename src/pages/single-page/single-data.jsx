import React from "react";
import { useParams } from "react-router-dom";
import { useGetPhone } from "../home/service/query/useGetPhone";
import { useGetSingleData } from "../home/service/query/useGetSingleData";

export const SingleData = () => {
  const { id, datakey } = useParams();
  const { data } = useGetSingleData(datakey, id);
  console.log(id);
  console.log(datakey);
  console.log(data);

  // console.log(tel);
  return (
    <div>
      {data ? (
        <>
          <h1>{data?.title}</h1>
          <img src={data.img} alt="" />
        </>
      ) : (
        <h1>malumot topilmadi</h1>
      )}
    </div>
  );
};
