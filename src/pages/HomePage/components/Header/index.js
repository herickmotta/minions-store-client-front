import React from "react";
import { Container, UserBox, Avatar, Content } from "./styles";

const Header = () => (
  <Container>
    <Content>
      <h1>Minion Mania</h1>
      <UserBox>
        <Avatar />
        <p>Visitante</p>
      </UserBox>
    </Content>
  </Container>
);

export default Header;
