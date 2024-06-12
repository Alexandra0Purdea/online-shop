import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  text-align: left;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const Product = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <ProductCard>
      <ProductImage src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <h3>Reviews:</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.comment} (Rating: {review.rating}/5)
          </li>
        ))}
      </ul>
      <button onClick={addToCart}>Add to Cart</button>
    </ProductCard>
  );
};

export default Product;
