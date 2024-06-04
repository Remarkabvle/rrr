import React from "react";
import { useLocation } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";

const ProductsItem = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);

  const isLiked = wishlistData.some((el) => el.id === product.id);

  return (
    <section className="products-section">
      <div key={product.id} className="products__card">
        <div className="products__card__img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="products__card__info">
          <h3>{product.title}</h3>
          <div className="products__card__price">
            <p>${product.price}</p>
            <div>
              {pathname.includes("/admin") ? (
                <div className="products__card__btns">
                  <button className="edit-btn">
                    <CiEdit />
                  </button>
                  <button className="delete-btn">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => dispatch(like(product))}
                  className={`like-btn ${isLiked ? "liked" : ""}`}
                >
                  {isLiked ? (
                    <FaHeart style={{ color: "crimson" }} />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsItem;
