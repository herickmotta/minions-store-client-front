import React from "react";
import { useHistory } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Auth } from "aws-amplify";
import { useUserContext } from "../../contexts/UserContext";
import {
  Container,
  UserBox,
  Avatar,
  Content,
  LogoBox,
  RightBox,
  LogOutBox,
} from "./styles";

function Header() {
  const history = useHistory();
  const { user, setUser } = useUserContext();
  async function signOut() {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <Container>
      <Content>
        <LogoBox onClick={() => history.push("/")}>
          <h1>Minion Mania</h1>
        </LogoBox>

        <RightBox>
          <UserBox onClick={() => history.push("/profile")}>
            <Avatar />
            <p>{user ? user.attributes.name : "Visitante"}</p>
          </UserBox>

          <LogOutBox onClick={signOut}>
            <IoIosLogOut />
          </LogOutBox>
        </RightBox>
      </Content>
    </Container>
  );
}

export default Header;
