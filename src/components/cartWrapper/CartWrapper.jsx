import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAmount, increaseAmount, remove } from '../../context/slice/cartSlice';

function CartWrapper({ data }) {
  const dispatch = useDispatch();

  const handleDecrease = (item) => {
    if (item.amount > 1) {
      dispatch(decreaseAmount(item));
    } else {
      dispatch(remove(item));
    }
  };

  const cartItems = data?.map((el) => (
    <tr key={el.id}>
      <td>
        <img src={el.images[0]} alt={el.title} width={100} height={100} />
      </td>
      <td>{el.title}</td>
      <td>{el.amount}</td>
      <td>
        {el.amount === 1 ? (
          <span>{el.price} USD</span>
        ) : (
          <div className="price-details">
            <span>{el.price * el.amount} USD</span>
            <span>{el.price} USD each</span>
          </div>
        )}
      </td>
      <td>
        <button onClick={() => handleDecrease(el)}>-</button>
      </td>
      <td>
        <span>{el.amount}</span>
      </td>
      <td>
        <button onClick={() => dispatch(increaseAmount(el))}>+</button>
      </td>
    </tr>
  ));

  const totalPrice = data.reduce((acc, item) => acc + item.price * item.amount, 0);
  const discount = 23.99; 
  const tax = 14;
  const total = totalPrice - discount + tax;

  return (
    <section>
      <div className="cart-wrapper">
        <h2>Cart wrapper</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Decrease</th>
              <th>Amount</th>
              <th>Increase</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span>Total price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Discount:</span>
          <span className="discount">- ${discount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>TAX:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-total-row">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="purchase-button">Make Purchase</button>
        <button className="back-button">Back to shop</button>
      </div>
    </section>
  );
}

export default CartWrapper;
