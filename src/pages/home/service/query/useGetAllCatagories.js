import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { request } from '../../../../config/request'

export const useGetAllCatagories = (datakey) => {
  return useQuery({
    queryKey: ["all-categories", datakey],
    queryFn: () => request.get(`/${datakey}`).then((res) => res.data)
  })
}
