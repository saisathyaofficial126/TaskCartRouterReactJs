import React from "react";
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, cart, onToggleCart}) => {
    return (
        <div className="product-list-container">
            {/* 10% Discount Banner */}
            <div className="discount-banner">
                🎁 Flat 10% Off on All Products – Limited Time Only!, 🚚 Hurry! Free Delivery Ends Tonight
            </div>
            <div className="Product-list">
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            inCart={!!cart.find(item => item.id === product.id)}
                            onToggleCart={onToggleCart}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList