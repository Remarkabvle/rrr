  import React from 'react'
  import { FaHeart, FaRegHeart } from 'react-icons/fa'
  import { useDispatch, useSelector } from 'react-redux'
  import { like } from '../../context/slice/wishlistSlice'
  import { IoCartOutline } from 'react-icons/io5'
  import { add } from '../../context/slice/cartSlice'

  const ProductItem = ({product}) => {
    const dispatch = useDispatch()
    const wishlistData = useSelector(state => state.wishlist.value)
    return (
      <div className='product__item'>
          <img src={product.images[0]} width={200} alt="" />
          <h3>{product.title}</h3>
          <button onClick={()=> dispatch(like(product))}>
            {
              wishlistData.some(el => el.id === product.id) 
              ?
              <FaHeart color='crimson'/>
              :
              <FaRegHeart/>
            }
          </button>
          <button onClick={()=>dispatch(add(product))}>
            <span>Add to cart</span>
            <IoCartOutline/>
          </button>
      </div>
    )
  }

  export default ProductItem


