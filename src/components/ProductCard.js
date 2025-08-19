import React from "react";
import './ProductCard.css';

const ProductCard = ({ product, inCart, onToggleCart }) => {
    return (

        <div className="product-card">
            <img src={product.image}
                alt={product.title}
                className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">₹{product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-button" onClick={() => onToggleCart(product)}>
                {inCart ? 'Remove from Cart' : 'Add to cart'}
            </button>
            {/* <div className="wave-container">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: "#0072ff" }} />
                </svg>
            </div> */}
        </div>
    )
}

export default ProductCard