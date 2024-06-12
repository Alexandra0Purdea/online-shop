import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  padding: 16px;
  overflow-y: auto;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
`;

const Cart = () => {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id}>
            <div>
              <h4>{item.name}</h4>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={e =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </CartItem>
        ))
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </CartContainer>
  );
};

export default Cart;
