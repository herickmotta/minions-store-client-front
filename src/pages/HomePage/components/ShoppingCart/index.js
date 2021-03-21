import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../../components/Button";
import MessageBox from "../../../../components/MessageBox";
import { useCartContext } from "../../../../contexts/CartContext";
import CalculateTotal from "./components/CalculateTotal";
import CartProducts from "./components/CartProducts";
import DiscountSection from "./components/DiscountSection";
import { Container, CartBox, ButtonBox } from "./styles";

export default function ShoppingCart() {
  const { cartProducts } = useCartContext();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("CHECKOUT");
  const [errorMessage, setErrorMessage] = useState(null);
  function handleCheckout() {
    setLoading(true);
    setDisabled(true);
    if (cartProducts.length === 0) {
      setErrorMessage("O carrinho não pode estar vazio!");
      setDisabled(false);
      setLoading(false);
    } else {
      setErrorMessage(null);
      setTimeout(() => {
        setButtonText("Sucesso!");
        setLoading(false);
        history.push("/checkout");
      }, 500);
    }
  }
  useEffect(() => {
    setButtonText("RESERVAR");
    setDisabled(false);
  }, [cartProducts]);
  return (
    <Container data-testid="cart-section">
      <CartBox>
        <h1>Carrinho</h1>
        <CartProducts />
        <DiscountSection />
        <CalculateTotal />
      </CartBox>

      <ButtonBox className="checkoutBtn">
        <Button
          width="100%"
          height="100%"
          text={buttonText}
          onClick={handleCheckout}
          loading={loading}
          disabled={disabled}
        />
      </ButtonBox>
      {errorMessage && <MessageBox text={errorMessage} isError />}
    </Container>
  );
}
