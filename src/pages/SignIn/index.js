import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input/styles";
import Button from "../../components/Button";
import { Container } from "./styles";
import Page from "../../components/Page/styles";
import Main from "../../components/MainContent/styles";
import Header from "../../components/Header";
import { useUserContext } from "../../contexts/UserContext";

export default function SignIn() {
  const history = useHistory();
  const { setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);
  const [warning, setWarning] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingButton(true);
    setWarning(null);
    try {
      const loggedUser = await Auth.signIn(email, password);
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
          <FormsContainer onSubmit={handleSubmit}>
            <h1>Já possui uma conta?</h1>
            <Input
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {warning && <p>{warning}</p>}

            <Button
              disabled={loadingButton}
              loading={loadingButton}
              text="ENTRAR"
              height="50px"
              border-radius="10px"
            />
          </FormsContainer>

          <Link to="/sign-up">Não tem uma conta?</Link>
        </Container>
      </Main>
    </Page>
  );
}
