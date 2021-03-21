import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { useUserContext } from "../../contexts/UserContext";
import OrdersService from "../../services/OrdersService";
import Order from "./components/Order";
import { Page, MainContent, Container } from "./styles";

function Profile() {
  const { user } = useUserContext();
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState({});
  async function getOrdersByUserSub() {
    if (user) {
      const userOrders = await OrdersService.getOrdersByUserSub(
        user.attributes.sub
      );
      setOrders(userOrders);
    }
  }

  useEffect(() => {
    if (!user) {
      history.push("/sign-in");
    } else {
      getOrdersByUserSub();
      if (typeof user.attributes.address === "string") {
        setAddress(JSON.parse(user.attributes.address));
      } else setAddress(user.attributes.address);
    }
  }, [user]);

  return (
    <Page>
      <Header />
      <MainContent>
        {user && (
          <Container>
            <h1>Informações sobre o usuário:</h1>
            <div>Nome: {user.attributes.name}</div>
            <div>Email: {user.attributes.email}</div>
            <div>Celular: {user.attributes.phone_number}</div>

            <h1>Endereço</h1>
            <div>Rua: {address.streetName}</div>
            <div>Número: {address.streetNumber}</div>
            <div>Bairro: {address.neighbourhood}</div>
            <div>CEP: {address.cep}</div>
            <div>Cidade: {address.city}</div>
            <div>UF: {address.state}</div>

            <h1>Pedidos:</h1>

            {orders.map((o) => (
              <Order orderInfo={o} />
            ))}
          </Container>
        )}
      </MainContent>
    </Page>
  );
}

export default Profile;
