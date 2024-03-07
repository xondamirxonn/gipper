import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostReg = () => {
  return useMutation({
    mutationKey: ["post-reg"],
    mutationFn: (data) =>
      request.post("/register", data).then((res) => {
        return res.data;
      }),
  });
};
