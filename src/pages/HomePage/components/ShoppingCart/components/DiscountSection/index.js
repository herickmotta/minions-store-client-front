import React, { useState } from "react";
import Button from "../../../../../../components/Button";
import MessageBox from "../../../../../../components/MessageBox";
import { Input, Container, ButtonBox } from "./styles";

export default function DiscountSection() {
  const [inputVoucher, setInputVoucher] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function verifyVoucher(e) {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    setTimeout(() => {
      setError(true);
      setMessage("Não há cupons aplicáveis!");
      setDisabled(false);
      setLoading(false);
    }, 500);
  }

  return (
    <Container>
      <form onSubmit={verifyVoucher} data-testid="discount-form">
        <Input
          data-testid="discount-input"
          placeholder="Cupom de desconto"
          value={inputVoucher}
          onChange={(e) => setInputVoucher(e.target.value)}
        />
        <ButtonBox>
          <Button
            width="80px"
            type="submit"
            text="APLICAR"
            loading={loading}
            disabled={disabled}
          />
        </ButtonBox>
      </form>
      {message && (
        <div>
          <MessageBox text={message} isError={error} />
        </div>
      )}
    </Container>
  );
}
