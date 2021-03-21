import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import AddressService from "../../services/AddressService";
import FormsContainer from "../../components/FormsContainer/styles";
import Input from "../../components/Input/styles";
import Button from "../../components/Button";
import { Container } from "./styles";
import UsersService from "../../services/UsersService";
import Page from "../../components/Page/styles";
import Main from "../../components/MainContent/styles";
import Header from "../../components/Header";

export default function SignUp() {
  const history = useHistory("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loadingButton, setLoadingButton] = useState(false);
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [warning, setWarning] = useState();

  function cepSucceeded(fullAddress) {
    setStreetName(fullAddress.logradouro);
    setNeighbourhood(fullAddress.bairro);
    setCity(fullAddress.localidade);
    setState(fullAddress.uf);
  }

  async function sendCep() {
    const formattedCep = cep.replace(/-/g, "");
    const data = await AddressService.getFromCep(formattedCep);
    cepSucceeded(data);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingButton(true);
    const userInfo = {
      username: email,
      password,
      attributes: {
        name,
        phone_number: phone,
        gender: "male",
        address: `{"streetName": "${streetName}", "streetNumber": "${streetNumber}", "cep": "${cep}", "state": "${state}", "city": "${city}", "complement": "${complement}", "neighbourhood": "${neighbourhood}" }`,
      },
    };
    try {
      const { userSub } = await Auth.signUp(userInfo);
      await UsersService.signUp({ ...userInfo, sub: userSub });
      setLoadingButton(false);
      history.push({
        pathname: "/confirm-sign-up",
        state: { detail: userInfo },
      });
    } catch (e) {
      if (e.code === "UsernameExistsException") {
        await Auth.resendSignUp(userInfo.username);
        history.push({
          pathname: "/confirm-sign-up",
          state: { detail: userInfo },
        });
      } else {
        setWarning(e.message);
      }
      setLoadingButton(false);
    }
  }
  return (
    <Page>
      <Header />
      <Main>
        <Container>
          <FormsContainer onSubmit={handleSubmit}>
            <h1>Criar uma conta</h1>
            <Input
              type="text"
              placeholder="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputMask
              mask="+5599999999999"
              placeholder="celular"
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="flex">
              <Input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="repetir senha"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <InputMask
              mask="99999-999"
              placeholder="cep"
              type="text"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={() => sendCep()}
              required
            />
            <Input
              type="text"
              placeholder="rua"
              id="streetName"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
              required
              disabled
            />
            <div className="flex">
              <Input
                type="text"
                placeholder="número"
                id="streetNumber"
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
                required
              />

              <Input
                type="text"
                placeholder="complemento"
                id="complement"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>

            <Input
              type="text"
              placeholder="bairro"
              id="neighbourhood"
              value={neighbourhood}
              onChange={(e) => setNeighbourhood(e.target.value)}
              required
              disabled
            />

            <div className="flex">
              <Input
                type="text"
                placeholder="cidade"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                disabled
              />

              <Input
                type="text"
                id="state"
                placeholder="UF"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                disabled
              />
            </div>

            {warning && <p>{warning}</p>}

            <Button
              disabled={loadingButton}
              loading={loadingButton}
              type="submit"
              text="CADASTRAR"
              height="50px"
              fontSize="20px"
            />
          </FormsContainer>
          <Link to="/sign-in">Já tem uma conta?</Link>
        </Container>
      </Main>
    </Page>
  );
}
