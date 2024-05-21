import React, { useEffect, useState } from 'react';
import products from './products.jsx';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductList(products);
    }, 1000); 
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <ProductList products={productList} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
