import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import './ProductCard.css';

const ProductCard = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className='product-container'>
      {products.map(product => (
        <div key={product.id} className='product-card'>
          <img src={product.image} alt={product.title} className='product-image' />
          <h3>{product.title}</h3>
          <p className='product-text'>Sign in or create account to see pricing</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
