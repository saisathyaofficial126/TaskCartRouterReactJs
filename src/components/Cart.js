import React from 'react';
import './Cart.css';

const CartPage = ({ cart, onToggleCart, onUpdateQuantity }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.10;
  const total = subtotal - discount;

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cart.map(item => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.title} className="cart-card-image" />
              <div className="cart-card-info">
                <h2>{item.title}</h2>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => onToggleCart(item)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Discount (10%): -₹{discount.toFixed(2)}</p>
          <h2>Total: ₹{total.toFixed(2)}</h2>
          <button className="buynow-button">Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;