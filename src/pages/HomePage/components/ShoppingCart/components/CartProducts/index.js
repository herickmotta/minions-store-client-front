import React from "react";
import { useCartContext } from "../../../../../../contexts/CartContext";
import CartProductSnippet from "./components/CartProductSnippet";
import { EmptyCartBox, ProductsList } from "./styles";

export default function CartProducts() {
  const { cartProducts } = useCartContext();
  return (
    <ProductsList data-testid="cart-list">
      {cartProducts.length > 0 ? (
        cartProducts.map((item) => (
          <CartProductSnippet item={item} key={item.product.SK} />
        ))
      ) : (
        <EmptyCartBox>Adicione items ao carrinho</EmptyCartBox>
      )}
    </ProductsList>
  );
}
