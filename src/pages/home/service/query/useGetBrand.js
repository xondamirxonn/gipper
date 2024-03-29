import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useGetBrand = () => {
  return useQuery({
    // queryKey: ["brands"],
    queryFn: () => request.get("/brand").then((res) => res.data),
  });
};
