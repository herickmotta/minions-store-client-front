import React from "react";
import Spinner from "../Spinner";
import Container from "./styles";

export default function Button({
  loading,
  onClick,
  disabled,
  text,
  height,
  width,
  fontSize,
}) {
  return (
    <Container
      data-testid="main-button"
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
      fontSize={fontSize}
    >
      {loading ? <Spinner /> : text}
    </Container>
  );
}
