import React from 'react'
// import data from '../data'
import { useColor } from '../hooks/useColor'

const Color = ({data, color}) => {
    const clothes = useColor(data, color)
  return (
    <>
        <h2 className='capitalize text-3xl p-5'> {clothes.length > 0 && color + " " + 'clothes'} </h2>
        <ul>
            {
               clothes.length === 0 ? <div>search not found</div> : clothes.map(item => (
                    <li key={item.name} className='m-2 list-item list'>
                        {item.name} - ${item.price}
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default Color