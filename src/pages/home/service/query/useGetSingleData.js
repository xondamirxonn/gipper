import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useGetSingleData = (datakey, id) => {
  return useQuery({
    queryKey: ["singla-data", datakey, id],
    queryFn: () => request.get(`/${datakey}/${id}`).then((res) => res.data),
  });
};
