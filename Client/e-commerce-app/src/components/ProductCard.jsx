import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div>
        <img src={product.image} alt={product.name} className='w-full h-48 object-cover rounded-t-lg' />
        <h2 className='text-xl font-bold mt-2'>{product.name}</h2>
        <p className='text-gray-600'>KES{product.price}</p>
        <button className='bg-blue-500 text-white py-2 px-4 rounded mt-4'>Add To Cart</button>
    </div>
  )
}

export default ProductCard