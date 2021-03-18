import React, { useState } from "react";
import Button from "../../../../../../components/Button";
import { useCartContext } from "../../../../../../contexts/CartContext";
import { Card, ImageBox, InfoBox } from "./styles";

export default function ProductCard({ product }) {
  const { name, price, photo, description, available } = product;
  const { cart, setCart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  console.log(product);
  function addProductToCart() {
    if (product.available <= 0) return;
    setLoading(true);
    setDisabled(true);
    setTimeout(() => {
      const isInCart = cart.find((o) => o.product.SK === product.SK);
      if (isInCart) {
        isInCart.quantity += 1;
        isInCart.product.available -= 1;
        setCart([...cart]);
      } else {
        product.available -= 1;
        setCart([...cart, { product, quantity: 1 }]);
      }
      setLoading(false);
      setDisabled(false);
    }, 500);
  }
  return (
    <Card>
      <ImageBox>
        <img src={photo} alt="product"/>
      </ImageBox>
      <InfoBox>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{`R$ ${(price / 100).toFixed(2).replace(/\./g, ",")}`}</p>
        <p>{`${available} units left`}</p>
      </InfoBox>
      <Button
        id="buy-btn"
        width="100%"
        height="10%"
        text={available > 0 ? "BUY" : "NO STOCK"}
        onClick={addProductToCart}
        loading={loading}
        disabled={disabled}
      />
    </Card>
  );
}
