import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  const [productCounts, setProductCounts] = useState({});

  const handleAddToCart = (product) => {
    if (productCounts[product.id] > 0) {
      addToCart({ ...product, count: productCounts[product.id] });
      setProductCounts({ ...productCounts, [product.id]: 0 });
    }
  };

  const handleIncrement = (productId) => {
    setProductCounts({
      ...productCounts,
      [productId]: (productCounts[productId] || 0) + 1
    });
  };

  const handleDecrement = (productId) => {
    if (productCounts[productId] > 0) {
      setProductCounts({
        ...productCounts,
        [productId]: productCounts[productId] - 1
      });
    }
  };

  return (
    <div style={{ width: '50%', padding: '10px', borderRight: '1px solid black' }}>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stockinfo.available ? 'In Stock' : 'Out of Stock'}</p>
          {product.stockinfo.available && (
            <div>
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <span style={{ margin: '0 10px' }}>{productCounts[product.id] || 0}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;