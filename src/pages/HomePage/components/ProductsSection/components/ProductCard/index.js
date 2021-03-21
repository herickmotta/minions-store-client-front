import React, { useState } from "react";
import Button from "../../../../../../components/Button";
import { useCartContext } from "../../../../../../contexts/CartContext";
import { Card, ImageBox, InfoBox } from "./styles";

export default function ProductCard({ product }) {
  const { name, price, photo, description, available } = product;
  const { cartProducts, setCartProducts } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function addProductToCart() {
    if (product.available <= 0) return;
    setLoading(true);
    setDisabled(true);
    setTimeout(() => {
      const isInCart = cartProducts.find((i) => i.product.SK === product.SK);
      if (isInCart) {
        isInCart.quantity += 1;
        isInCart.product.available -= 1;
        setCartProducts([...cartProducts]);
      } else {
        product.available -= 1;
        setCartProducts([...cartProducts, { product, quantity: 1 }]);
      }
      setLoading(false);
      setDisabled(false);
    }, 500);
  }
  return (
    <Card>
      <ImageBox>
        <img src={photo} alt="product" />
      </ImageBox>
      <InfoBox>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">{`R$ ${(price / 100)
          .toFixed(2)
          .replace(/\./g, ",")}`}</p>
        <p>{`${available} unidades`}</p>
      </InfoBox>
      <Button
        id="buy-btn"
        width="100%"
        height="10%"
        text={available > 0 ? "COMPRAR" : "INDISPONÍVEL"}
        onClick={addProductToCart}
        loading={loading}
        disabled={disabled}
      />
    </Card>
  );
}
