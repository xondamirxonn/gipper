import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useGetDiscount = () => {
  return useQuery({
    queryKey: ["discount"],
    queryFn: () => request.get("/discount").then((res) => res.data)
  })
}
