import { data } from 'autoprefixer'
import React from 'react'

const Card = ({ products }) => {
    console.log(products)
    return (
        <div className='grid gap-10 grid-cols-4 w-full max-w-screen-lg'>
            {
                products.map(product => (
                    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
                        <figure className='relative mb-2 w-full h-4/5'>
                            <div className='m-2 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1'>
                                +
                            </div>
                            <span className='p-1 text-black text-xs absolute bottom-0 bg-white/60 rounded-lg m-2'>
                                {product.category}
                            </span>
                            <img className='w-full h-full object-cover rounded-lg' src={product.image} alt="headphones" />
                        </figure>
                        <p className='flex justify-between'>
                            <span className='text-sm font-light truncate w-1/2'>{product.title}</span>
                            <span className='text-lg font-bold'>${product.price}</span>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
