import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [cart, setCart] = useState([]);
 



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await fetch('https://fakestoreapi.com/products');
        const productData = await productResponse.json()
        console.log(productData);
        setProducts(productData);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, []);

  if (loading) {
    return <h1 className="loading"> Data is Fetching... Please Wait...</h1>
  }
  if (error) {
    return <h1> Error: {error}</h1>
  }

  // add and remove to cart function
  const toggleCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // update quantity of the item
 const updateQuantity = (productId, newQuantity) => {
  if (newQuantity <= 0) {
    setCart(prevItems => prevItems.filter(item => item.id !== productId));
  } else {
    setCart(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }
};


  return (
    <div>
      <header className="header">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}/>
      </header>
      <Routes>
        <Route path="/" element={
          <ProductList
            products={products}
            cart={cart}
            onToggleCart={toggleCart}
          />
        } />

        <Route path="/cart" element={
          <Cart
            cart={cart}
            onToggleCart={toggleCart}
            onUpdateQuantity={updateQuantity}
            
            />
        } />


      </Routes>

    </div>

  )
}

export default App;

