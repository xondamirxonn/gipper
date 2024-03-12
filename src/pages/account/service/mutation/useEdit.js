import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useEdit = () => {
  return useMutation({
    mutationKey: ["edit"],
    mutationFn: (data) =>
      request.put("/users", data).then((res) => res.data),
  });
}



