import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "./Header.css"


const Header = () => {
  let count =  useSelector(state => state.counter.value)
  let wishlistCount =  useSelector(state => state.wishlist.value).length
  return (
    <header className='header'>
        <h2>Header {count}</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/wishlist"}>
          <span>Wishlist</span>
          {
            wishlistCount ? 
            <sup>{wishlistCount}</sup>
            :
            <></>
          }
        </NavLink>
        <NavLink to={"/cart"}>
          <span>Cart</span>
          <sup>{0}</sup>
        </NavLink>
    </header>
  )
}

export default Header