import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const useGetPhone = (search = "") => {
  return useQuery({
    queryKey: ["get-phone", search],
    queryFn: () => request.get("/tel", {params: {title_like: search}}).then((res) => res.data),
  });
};
