import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryData = (props) => {
  return (
    <div className='pt-20 '>
      
      <Link to={`/catagories/${props.datakey}`} className='bg-gray-200 rounded-md p-3 flex  gap-3 items-center w-[250px] h-[20vh] containerr'>
        <img className='w-[20%]' src={props.img} alt="" />
        <span className='text-[1.5rem]'>{props.title}</span>
      </Link>
    </div>
  )
}
