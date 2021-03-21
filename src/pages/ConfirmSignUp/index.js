import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import Button from "../../components/Button";
import { Container } from "./styles";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input";
import Page from "../../components/Page/styles";
import Main from "../../components/MainContent/styles";
import Header from "../../components/Header";
import { useUserContext } from "../../contexts/UserContext";

export default function ConfirmSignUp(props) {
  const history = useHistory();
  const { setUser } = useUserContext();
  const [loadingButton, setLoadingButton] = useState(false);
  const [secret, setSecret] = useState("");
  const [warning, setWarning] = useState(null);
  const user = props.location.state.detail;

  async function handleConfirmationSubmit(event) {
    event.preventDefault();
    setLoadingButton(true);
    setWarning(null);
    try {
      await Auth.confirmSignUp(user.username, secret);
      const loggedUser = await Auth.signIn(user.username, user.password);
      setUser(loggedUser);
      setLoadingButton(false);
      history.push("/");
    } catch (e) {
      setWarning(e.message);
      setLoadingButton(false);
    }
  }

  return (
    <Page>
      <Header />
      <Main>
        <Container>
          <FormsContainer onSubmit={handleConfirmationSubmit}>
            <h1>Insira o código enviado para seu e-mail</h1>
            <Input
              type="text"
              placeholder="código"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
            {warning && <p>{warning}</p>}

            <Button
              disabled={loadingButton}
              loading={loadingButton}
              type="submit"
              text="cadastrar"
              height="50px"
              fontSize="20px"
            />
          </FormsContainer>
        </Container>
      </Main>
    </Page>
  );
}
