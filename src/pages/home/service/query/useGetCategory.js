import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetCatagries = () => {
  return useQuery({
    queryKey: ["categries"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
