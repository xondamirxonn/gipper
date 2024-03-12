import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetAllData = (search = "") => {
  return useQuery({
    queryKey: ["AllData", search],
    queryFn: () =>
      request
        .get(`alldata`, { params: { title_like: search } })
        .then((res) => res.data),
  });
};
