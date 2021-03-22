import React from "react";
import { useCartContext } from "../../../../../../../../contexts/CartContext";
import { Box, ImageBox, InfoBox, AddOrRemoveItem } from "./styles";

export default function CartProductSnippet({ item }) {
  const { cartProducts, setCartProducts } = useCartContext();
  const { name, price, photo } = item.product;

  function addQuantity() {
    if (item.product.available <= 0) return;
    item.quantity += 1;
    item.product.available -= 1;
    setCartProducts([...cartProducts]);
  }

  function removeQuantity() {
    item.quantity -= 1;
    item.product.available += 1;
    if (item.quantity <= 0) {
      const itemIndex = cartProducts.findIndex(
        (i) => i.product.SK === item.product.SK
      );
      if (itemIndex >= 0) {
        cartProducts.splice(itemIndex, 1);
      }
    }
    setCartProducts([...cartProducts]);
  }
  return (
    <Box data-testid="cart-item">
      <ImageBox>
        <img src={photo} alt="product" />
      </ImageBox>
      <InfoBox>
        <h2>{name}</h2>
        <div>
          <p>{`Quantidade: ${item.quantity}`}</p>
          <p>{`R$ ${((price * item.quantity) / 100)
            .toFixed(2)
            .replace(/\./g, ",")}`}</p>
        </div>
      </InfoBox>
      <AddOrRemoveItem>
        <button type="button" data-testid="add-btn" onClick={addQuantity}>
          +
        </button>
        <button type="button" data-testid="rmv-btn" onClick={removeQuantity}>
          -
        </button>
      </AddOrRemoveItem>
    </Box>
  );
}
