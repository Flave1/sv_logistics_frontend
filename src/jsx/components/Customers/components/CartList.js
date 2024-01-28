import React from 'react';
import { Link } from 'react-router-dom';

export default function CartList({ menu, addToCart, removeFromCart, quantity }) {
  return (
    <div className="order-check d-flex align-items-center my-3">
      <div className="dlab-media">
        <img src={menu.image} alt="" />
      </div>
      <div className="dlab-info">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h4 className="font-w600  mb-0">
              <Link to={'#'}>{menu.menuName}</Link>
            </h4>
          </div>
          <h4 className="text-primary ms-2">+${menu.price}</h4>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span></span>
          <div className="quntity">
            <button data-decrease onClick={() => removeFromCart(menu)}>
              -
            </button>
            <input data-value type="text" value={quantity} onChange={() => null} />
            <button data-increase onClick={() => addToCart(menu)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
