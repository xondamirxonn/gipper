import { useMutation } from "@tanstack/react-query";
import React from "react";
import { request } from "../../../../config/request";

export const usePostLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
  });
};
