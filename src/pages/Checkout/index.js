import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import colors from "../../config/colors";
import { useCartContext } from "../../contexts/CartContext";
import { useUserContext } from "../../contexts/UserContext";
import OrdersService from "../../services/OrdersService";
import Order from "../Profile/components/Order";
import { Page, MainContent, Container } from "./styles";

export default function Checkout() {
  const history = useHistory();
  const { cartProducts, cartInfo } = useCartContext();
  const { user } = useUserContext();
  const [order, setOrder] = useState(null);

  if (!user) {
    history.push("/sign-in");
  }

  async function sendOrder() {
    const userSub = user.attributes.sub;
    try {
      const data = await OrdersService.postOrder(
        { ...cartInfo, products: cartProducts },
        userSub
      );
      setOrder(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (user) {
      sendOrder();
    }
  }, []);
  return (
    <Page>
      <Header />
      <MainContent>
        <Container>
          <h1>Sucesso!</h1>
          <h1>Informações sobre seu pedido:</h1>
          {order ? (
            <Order orderInfo={order} />
          ) : (
            <Spinner color={colors.darkPink} fontSize="40px" />
          )}
        </Container>
      </MainContent>
    </Page>
  );
}
