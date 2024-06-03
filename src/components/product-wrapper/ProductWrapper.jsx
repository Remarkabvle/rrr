import React from 'react'
import ProductItem from './ProductItem'
import "./ProductWrapper.css"

const ProductWrapper = ({data,title}) => {
  return (
    <>
    <h2>{title}</h2>
    <div className='product__wrapper'>
        {
          data?.map((product)=>(
            <ProductItem product={product} key={product.id}/>
          ))
        }
    </div>
        </>
  )
}

export default ProductWrapper




