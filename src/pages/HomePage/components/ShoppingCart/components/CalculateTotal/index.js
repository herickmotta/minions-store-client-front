import React, { useState, useEffect } from "react";
import { useCartContext } from "../../../../../../contexts/CartContext";
import Container from "./styles";

function CalculateTotal() {
  const { cartProducts, cartInfo, setCartInfo } = useCartContext();
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(3000);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  function getSubTotal() {
    let sum = 0;
    cartProducts.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    setSubTotal(sum);
  }

  function getTotal() {
    let totalSum = subTotal + shipping;
    if (totalSum < 0) totalSum = 0;
    setTotal(totalSum);
  }

  useEffect(() => {
    getSubTotal();
  }, [cartProducts]);

  useEffect(() => {
    getTotal();
  }, [subTotal, discount, shipping]);

  useEffect(() => {
    setCartInfo({ ...cartInfo, discount, shipping, subTotal, total });
  }, [total]);
  return (
    <Container>
      <div>
        <span>Sub Total</span>
        <span data-testid="sbt-field">{`R$ ${(subTotal / 100)
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
      <div>
        <span>Frete</span>
        <span data-testid="ship-field">{`R$ ${(shipping / 100)
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
      <div>
        <span>Desconto</span>
        <span data-testid="disc-field">{`R$ ${(discount / 100)
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span data-testid="ttl-field">{`R$ ${(total / 100)
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
    </Container>
  );
}

export default CalculateTotal;
