import React from "react";
import { Container, TotalInfo } from "./styles";
import ProductSnippet from "./components/ProductSnippet";

function Order({ orderInfo }) {
  return (
    <Container>
      <h1>Pedido</h1>
      {orderInfo.products.map((i) => (
        <ProductSnippet item={i} />
      ))}

      <TotalInfo>
        <div>
          SubTotal:
          {`R$ ${(orderInfo.subtotal / 100).toFixed(2).replace(/\./g, ",")}`}
        </div>
        <div>
          Frete:
          {`R$ ${(orderInfo.shipping / 100).toFixed(2).replace(/\./g, ",")}`}
        </div>
        <div>
          Desconto:
          {`R$ ${(orderInfo.discount / 100).toFixed(2).replace(/\./g, ",")}`}
        </div>
        <div className="total">
          Total:
          {`R$ ${(orderInfo.total / 100).toFixed(2).replace(/\./g, ",")}`}
        </div>
      </TotalInfo>
    </Container>
  );
}

export default Order;
