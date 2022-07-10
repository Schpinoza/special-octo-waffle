import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

import styled from "styled-components";

const Ul = styled.ul`
  max-width: 100%;
  margin: auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: rgba(255, 253, 208, 0.4);
`;

const OrderButton = styled.button`
font-family: 'Open Sans';
  color: #FFC0CB !important;
  text-transform: uppercase;
  background:#e0e0dc ;
  padding: 20px;
  border: 4px solid #FFC0CB !important;
  border-radius: 10px;
  text-decoration: none;
  width:50%;
  display: block;
  transition: all 0.3s ease 0s;
  text-align:center;
  margin:auto;

&:hover {
  color: #20bf6b !important;
  border-radius: 50px;
  border-color: #20bf6b !important;
  transition: all 0.6s ease 0s;
}
`;
const Cart = () => {



  const selectedCartItems = useSelector((state) => {
    return state.iceCreamCart.items;
  });

  return (
    <>
      <Ul>
        {selectedCartItems.map((product) => {
          return (
            <CartItems
              id={product.id}
              key={product.id}
              productType={product.productType}
              img={product.img}
              price={product.price}
              amount={product.amount}
              item={product}
            />
          );
        })}
           
        {selectedCartItems.length > 0 && <OrderButton>Order</OrderButton>}
      </Ul>
    </>
  );
};

export default Cart;
